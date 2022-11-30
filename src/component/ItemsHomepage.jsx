import React from 'react';
import ItemProduct from './ItemProduct';

export default function ItemsHomepage({ plants }) {
  let product = [];
  for (let i = 0; i < 3; i++) {
    product.push(<ItemProduct key={plants.data[i]._id} plant={plants.data[i]} />);
  }
  return <div className="plant-items">{product}</div>;
}
