import React from 'react';
import maps from '../img/Peta.png';
import location from '../img/point.png';
import email from '../img/gmail.png';
import whatsapp from '../img/whatsapp.png';

export default function Location() {
  return (
    <div className="maps">
      <img src={maps} alt="maps" />
      <div className="contact py-5">
        <div className="location mb-3 flex items-center">
          <img src={location} alt="location" className="h-10 w-10" />
          <h1 className="px-2">Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123</h1>
        </div>
        <div className="location ml-1 mb-3 flex items-center">
          <img src={email} alt="location" className="h-8 w-8" />
          <h1 className="px-2">Dicoding@gmail.com</h1>
        </div>
        <div className="location ml-1 flex items-center">
          <img src={whatsapp} alt="location" className="h-8 w-8" />
          <h1 className="px-2">+62 0823456789</h1>
        </div>
      </div>
    </div>
  );
}
