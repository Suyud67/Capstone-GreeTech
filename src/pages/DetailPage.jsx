import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BtnPrevPage from '../event/BtnPrevPage';
import { getPlant } from '../data/GreeTechPlants';
import { FaPhone } from 'react-icons/fa';
import loadingGif from '../public/loading/loading.webp';

function DetailPage() {
  const [plant, setPlant] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // get id plant by id in params
  // fetch it
  const { id } = useParams();
  useEffect(() => {
    const getPlantProduct = async () => {
      const data = await getPlant(id);
      setLoading(false);
      // handle if id is false
      setError(data.error);
      setPlant(data.plant);
    };
    getPlantProduct();
  }, [id]);

  // set error and loading
  if (error) {
    return (
      <div className="container-detail mt-24 mb-40">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1670384170~exp=1670384770~hmac=274684a2cac71d0b60eb3a89f3ca5fc4fb081ab41aee2d34de6fca339a3b7b02"
          alt="bad req"
          loading="lazy"
          className=" m-auto"
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container-detail mt-24 mb-40">
        <img src={loadingGif} alt="bad req" loading="lazy" className=" m-auto" />
      </div>
    );
  }

  // return UI for plant detail
  return (
    <div className="container-detail mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="content m-auto w-9/12 md:w-4/5">
        <div className="header-detail my-3 text-center font-bold lg:text-2xl">
          <h2>Detail Product From {plant.user}</h2>
        </div>
        <div className="content-detail rounded-md p-6 shadow-lg">
          <div className="img-product m-auto  w-9/12 ">
            <img src={`https://be-greetech.onrender.com/${plant.img_product}`} alt="plant" loading="lazy" />
          </div>
          <div className="desc-product mt-3 lg:text-lg">
            <h3 className="font-bold">{plant.name_product}</h3>
            <h3 className="font-bold text-green-600">{plant.price_product}</h3>
            <p>{plant.date_upload}</p>
            <p>{plant.desc_product}</p>
            <h3>
              <FaPhone className="inline" /> +62{plant.noHp_user}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
