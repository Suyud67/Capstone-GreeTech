import React from "react";
import gambar from "../img/imageAbout.png";

export default function About() {
  return (
    <div className="py-36 px-10 lg:flex lg:items-center lg:justify-between">
      <div className="text lg:items-center">
        <h1 className="text-xl font-bold">About US</h1>
        <p className="py-2">
            GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka dan juga para user dapat berinteraksi 
            dengan fitur diskusi.
        </p>
        <p className="mb-2">
            Dalam fitur Diskusi mereka dapat membahas seputar cara membuat mini taman di rumah yang menik atau 
            tips dan trik dalam bercocok tanam.
        </p>
      </div>
      <img src={gambar} alt="" />
    </div>
  );
}