import React from 'react';
import BtnPrevPage from '../event/BtnPrevPage';
import img1 from '../img/product-2.png';

function DetailPage() {
  return (
    <div className="container-detail mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="content m-auto w-9/12 md:w-3/5">
        <div className="header-detail my-3 text-center font-bold lg:text-2xl">
          <h2>Detail Product From Udin</h2>
        </div>
        <div className="content-detail lg:flex lg:justify-center lg:gap-4">
          <div className="img-product m-auto  w-9/12 ">
            <img src={img1} alt="" />
          </div>
          <div className="desc-product mt-3 lg:text-lg">
            <h3>Nama Product</h3>
            <p>20-10-2020</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto nostrum nulla eaque doloremque non ea amet commodi in dolorum distinctio rerum perferendis nam, eos possimus assumenda. Nihil, quos perferendis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
