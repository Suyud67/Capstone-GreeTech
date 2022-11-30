import React from 'react';
import gambar from '../img/imageAbout.png';

export default function About() {
  return (
    <div className="my-36 flex flex-col items-center justify-between px-5 lg:m-auto lg:my-40 lg:w-5/6 lg:flex-row">
      <div className="text order-2 mt-3 lg:order-1 lg:items-center">
        <h1 className="text-xl font-bold">About Us</h1>
        <p className="py-2">GreeTech merupakan tempat sarana promosi tanaman yang mencakup 1 Indonesia. GreeTech juga tempat untuk berbagi ilmu bercocok tanam, mulai dari tanaman rumah, tanaman pokok, sayuran, dll.</p>
      </div>
      <div className="image order-1 lg:order-2">
        <img src={gambar} alt="" />
      </div>
    </div>
  );
}
