import React from "react";
import gambar from "../img/imageAbout.png";

export default function AboutTech() {
  return (
    <div className="py-36 px-10 lg:flex lg:items-center lg:justify-between">
      <div className="text lg:items-center">
        <h1 className="text-xl font-bold">About US</h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro
          veritatis, aut eaque dolore tempora vitae maiores nihil sunt nostrum?
          Delectus ad officiis quo quae quam facere culpa quod nobis?
        </p>
        <p className="mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          velit eligendi optio, facere tempora voluptate id ducimus vitae vel
          quisquam.
        </p>
      </div>
      <img src={gambar} alt="" />
    </div>
  );
}
