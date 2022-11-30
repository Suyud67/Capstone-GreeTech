import React from 'react';
import ItemProduct from './ItemProduct';

export default function ItemsTech({ plants }) {
  return (
    <div className="plant-items">
      {plants.data.map((plant) => {
        return <ItemProduct key={plant._id} plant={plant} />;
      })}
    </div>
  );
}
