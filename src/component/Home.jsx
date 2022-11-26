import React from "react";
import homeImage from "../logo/Group 3 1.png";
import HomeButton from "../event/HomeButton";

function Home() {
  return (
    <div className="h-auto px-10 pt-28 md:items-center lg:flex lg:items-center lg:justify-between lg:px-10">
        <div className="mb-4 pt-5 lg:w-1/2">
          <div className="text">
            <h1 className="text-2xl font-bold text-green-600">
              GreeTech, Solusi Untuk Tanaman Anda !
            </h1>
            <p className="text-lg">
            GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka dan juga para user dapat berinteraksi 
            dengan fitur diskusi. Dalam fitur Diskusi mereka dapat membahas seputar cara membuat mini taman di rumah yang menik atau 
            tips dan trik dalam bercocok tanam.
            </p>
          </div>
          <div className="btn py-5">
            <HomeButton />
          </div>
        </div>
        <div className="image md:flex md:justify-center">
          <img src={homeImage} alt="" />
        </div>
      </div>
  );
}

export default Home;
