import React from "react";
import product1 from "../img/product-2.png";

export default function ItemDetail() {
  return (
<div className="lg:flex lg:w-full lg:justify-between lg:py-10">
      <div className="card">
        <img src={product1} alt="" className="card-img-" />
        <div className="date pt-2">24-10-2022</div>
        <div className="title">Bunga</div>
        <div className="btn my-2">
        </div>
      </div>
    </div>
  );
}