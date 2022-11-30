import React from 'react';
import { useParams } from 'react-router-dom';
import BtnPrevPage from '../event/BtnPrevPage';
import plants from '../data/plants.json';

function DetailPage() {
  const { id } = useParams();
  const findPlant = plants.data.find((plant) => {
    return plant._id === id ? plant : console.warn('product is not found');
  });

  return (
    <div className="container-detail mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="content m-auto w-9/12 md:w-3/5">
        <div className="header-detail my-3 text-center font-bold lg:text-2xl">
          <h2>Detail Product From {findPlant.user}</h2>
        </div>
        <div className="content-detail flex flex-col justify-center p-4 shadow-lg lg:flex-row lg:gap-4">
          <div className="img-product m-auto  w-9/12 ">
            <img src={findPlant.img_product} alt="plant" />
          </div>
          <div className="desc-product mt-3 lg:text-lg">
            <h3 className="font-bold">{findPlant.name_product}</h3>
            <h3 className="font-bold text-green-600">{findPlant.price_product}</h3>
            <p>{findPlant.date_upload}</p>
            <p>{findPlant.desc_product}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
