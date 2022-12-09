/* eslint-disable no-template-curly-in-string */
import React from 'react';
import ButtonDetailTech from '../event/ButtonDetailTech';

function ItemProduct({ plant }) {
  return (
    <div className="card">
      <img src={`https://be-greetech.onrender.com/${plant.img_product}`} alt="" className="card-img" loading="lazy" />
      <div className="content-product m-4">
        <div className="desc-product">
          <h2 className="title font-bold">{plant.user}</h2>
          <h2 className="p-2 font-bold text-green-600">{plant.price_product}</h2>
        </div>
      </div>
      <div className="btn m-2">
        <ButtonDetailTech id={plant._id} />
      </div>
    </div>
  );
}

export default ItemProduct;
