import React from 'react';
import ItemsTech from '../component/ItemsTech';
import About from './About';
import Home from '../component/Home';

export default function HomeTech() {
  return (
    <>
      <div className="h-auto px-10 pt-28 md:items-center lg:flex lg:items-center lg:justify-between lg:px-10">
        <Home />
      </div>
      <About />
      <div className="product px-10">
        <h1 className="py-0 text-center text-xl font-bold">Top Product</h1>
        <div className="md:grid-col-2 grid w-full lg:grid-cols-4">
          <ItemsTech />
          <ItemsTech />
          <ItemsTech />
        </div>
      </div>
    </>
  );
}
