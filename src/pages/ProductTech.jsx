import React from 'react';
import ItemsTech from '../component/ItemsTech';
import BtnAddProduct from '../event/BtnAddProduct';
import plants from '../data/plants.json';

export default function ProductTech() {
  return (
    <div className="relative mt-28">
      <h1 className="text-center text-xl font-bold">Product</h1>
      <ItemsTech plants={plants} />

      <BtnAddProduct />
    </div>
  );
}
