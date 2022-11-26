import React from 'react';
import gambar from '../img/imageAbout.png';

export default function About() {
  return (
    <div className="py-36 px-10 lg:flex lg:items-center lg:justify-between">
      <div className="text lg:items-center">
        <h1 className="text-xl font-bold">About US</h1>
        <p className="py-2">GreeTech merupakan tempat sarana promosi tanaman yang mencakup 1 Indonesia. GreeTech juga tempat untuk berbagi ilmu bercocok tanam, mulai dari tanaman rumah, tanaman pokok, sayuran, dll.</p>
      </div>
      <img src={gambar} alt="" />
    </div>
  );
}
