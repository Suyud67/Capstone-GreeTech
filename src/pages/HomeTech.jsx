/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import About from './About';
import Home from '../component/Home';
import { getAllPlant } from '../data/GreeTechPlants';
import ItemsHomepage from '../component/ItemsHomepage';
import loadingGif from '../public/loading/loading.webp';

export default function HomeTech() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getAllPlant();
      setLoading(false);

      setProduct(data);
    };

    getAllProducts();
  }, [products]);

  if (loading) {
    return (
      <>
        <Home />
        <About />
        <div className="product px-10">
          <img src={loadingGif} alt="" className="m-auto" />
        </div>
      </>
    );
  }

  return (
    <>
      <Home />
      <About />
      <div className="product px-10">
        <h1 className="mb-3 text-center text-xl font-bold">Top Product</h1>
        <ItemsHomepage plants={products} />
      </div>
    </>
  );
}
