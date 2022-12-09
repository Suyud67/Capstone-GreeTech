import React from 'react';
import maps from '../public/img/Peta.png';
import location from '../public/img/point.png';
import email from '../public/img/gmail.png';
import whatsapp from '../public/img/whatsapp.png';

export default function Location() {
  return (
    <div className="maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.956952477727!2d107.63166691474308!3d-6.895752595017205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a55a776727%3A0x8e3f7a0d549bd0d6!2sJl.%20Batik%20Kumeli%20No.50%2C%20RW.12%2C%20Sukaluyu%2C%20Kec.%20Cibeunying%20Kaler%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040123!5e0!3m2!1sid!2sid!4v1670600925114!5m2!1sid!2sid" width="674" height="480" loading="lazy"></iframe>
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
