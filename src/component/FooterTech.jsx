import React from 'react';
import SideMap from './Footer-SideMap';
import ConnectLinks from './Footer-ConnectLinks';

export default function footerTech() {
  return (
    <div className="box relative bottom-0 left-0 right-0 h-auto w-full bg-slate-700 px-10 pt-5 pb-2 text-white">
      <div className="copyrigh  justify-between lg:flex">
        <div className="logo lg:w-2/5">
          <div className="text">
            <h1 className="text-xl">GreeTech</h1>
            <p>GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka atau membagikan tips dan trik dalam bercocok tanam.</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-5">
          <div className="sidemap lg:mt-[-20px]">
            <h1 className="text-xl">Sidemap</h1>
            <SideMap />
          </div>
          <div className="connect ">
            <h1 className="text-xl">Connect</h1>
            <ConnectLinks />
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; 2022 Tim C22-065 SIB x Dicoding.com Bath 3</span>
      </div>
    </div>
  );
}
