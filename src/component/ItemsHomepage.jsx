import React from 'react';
import ItemProduct from './ItemProduct';

export default function ItemsHomepage({ plants }) {
  return (
    <div className="plant-items">
      {plants.map((plant, i) => {
        if (i < 3) {
          return <ItemProduct key={plant._id} plant={plant} />;
        }
      })}
    </div>
  );
}
