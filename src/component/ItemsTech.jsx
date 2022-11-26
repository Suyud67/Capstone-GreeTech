import React from 'react';
import ItemProduct from './ItemProduct';

export default function ItemsTech() {
  return (
    <div className="lg:flex lg:w-full lg:justify-between lg:py-10">
      <div className="card">
        <ItemProduct />
      </div>
    </div>
  );
}
