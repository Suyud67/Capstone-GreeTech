import React from 'react';
import homeImage from '../public/logo/Group 3 1.png';
import ButtonTech from '../event/ButtonHomeTech';

function Home() {
  return (
    <div className="mt-28 flex h-auto flex-col items-center justify-between gap-2 px-5 lg:flex-row ">
      <div className="order-2 mb-4 pt-5 lg:order-1 lg:w-1/2">
        <div className="text">
          <h1 className="text-2xl font-bold text-green-600">GreeTech, Solusi Untuk Tanaman Anda !</h1>
          <p className="text-lg">GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka atau membagikan tips dan trik dalam bercocok tanam.</p>
        </div>
        <div className="btn py-5">
          <ButtonTech />
        </div>
      </div>
      <div className="image order-1 lg:order-2">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
