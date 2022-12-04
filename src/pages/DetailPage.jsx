import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BtnPrevPage from '../event/BtnPrevPage';
import { getPlant } from '../data/GreeTechPlants';

function DetailPage() {
  const [plant, setPlant] = useState([]);
  const [error, setError] = useState(false);

  // get id plant by id in params
  // fetch it
  const { id } = useParams();
  useEffect(() => {
    const getPlantProduct = async () => {
      const data = await getPlant(id);
      // handle if id is false
      setError(data.error);
      setPlant(data.product);
    };
    getPlantProduct();
  }, [id]);

  if (error) {
    return (
      <div className="container-detail mt-24 mb-40">
        <img
          src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?t=st=1669982637~exp=1669983237~hmac=e52acfd6a9efab0760440172f66fcd9479037ad2b6d9434a5a5dca228e338f15"
          alt="bad req"
          loading="lazy"
          className=" m-auto"
        />
      </div>
    );
  }

  return (
    <div className="container-detail mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="content m-auto w-9/12 md:w-4/5">
        <div className="header-detail my-3 text-center font-bold lg:text-2xl">
          <h2>Detail Product From {plant.user}</h2>
        </div>
        <div className="content-detail flex flex-col justify-center p-4 shadow-lg lg:flex-row lg:gap-4">
          <div className="img-product m-auto  w-9/12 ">
            <img src={plant.img_product} alt="plant" />
          </div>
          <div className="desc-product mt-3 lg:text-lg">
            <h3 className="font-bold">{plant.name_product}</h3>
            <h3 className="font-bold text-green-600">{plant.price_product}</h3>
            <p>{plant.date_upload}</p>
            <p>{plant.desc_product}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
