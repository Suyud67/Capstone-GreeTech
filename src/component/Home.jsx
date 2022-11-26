import React from 'react';
import homeImage from '../logo/Group 3 1.png';
import ButtonTech from '../event/ButtonHomeTech';

function Home() {
  return (
    <>
      <div className="mb-4 pt-5 lg:w-1/2">
        <div className="text">
          <h1 className="text-2xl font-bold text-green-600">GreeTech, Solusi Untuk Tanaman Anda !</h1>
          <p className="text-lg">GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka atau membagikan tips dan trik dalam bercocok tanam.</p>
        </div>
        <div className="btn py-5">
          <ButtonTech />
        </div>
      </div>
      <div className="image md:flex md:justify-center">
        <img src={homeImage} alt="" />
      </div>
    </>
  );
}

export default Home;
