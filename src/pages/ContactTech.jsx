import React from 'react';
import FormTech from '../component/FormTech';
import Location from '../component/Location';

export default function ContactTech() {
  return (
    <div className="px-10 pt-32 lg:mb-20">
      <h1 className="text-center text-xl font-bold">Contact</h1>
      <div className="box-contact pt-10 lg:flex lg:justify-between">
        <div className="lg:mx-5 lg:w-2/4">
          <h1 className="text-xl font-semibold">Contact Us</h1>
          <FormTech />
        </div>
        <Location />
      </div>
    </div>
  );
}
