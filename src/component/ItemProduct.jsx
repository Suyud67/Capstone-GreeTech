import React from 'react';
import ButtonDetailTech from '../event/ButtonDetailTech';
import product1 from '../img/product-2.png';

function ItemProduct() {
  return (
    <>
      <img src={product1} alt="" className="card-img" />
      <div className="date pt-2">24-10-2022</div>
      <div className="title">Bunga</div>
      <div className="btn my-2">
        <ButtonDetailTech />
      </div>
    </>
  );
}

export default ItemProduct;
