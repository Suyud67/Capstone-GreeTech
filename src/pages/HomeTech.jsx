import React from 'react';
import About from './About';
import Home from '../component/Home';
import plants from '../data/plants.json';
import ItemsHomepage from '../component/ItemsHomepage';

export default function HomeTech() {
  return (
    <>
      <Home />
      <About />
      <div className="product px-10">
        <h1 className="mb-3 text-center text-xl font-bold">Top Product</h1>
        <ItemsHomepage plants={plants} />
      </div>
    </>
  );
}
