import React from 'react';
import ItemProduct from './ItemProduct';

export default function ItemsTech({ plants }) {
  if (plants.length) {
    return (
      <div className="plant-items">
        {plants.map((plant) => {
          return <ItemProduct key={plant._id} plant={plant} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="mt-5 text-center">
        <h2 className=" text-xl">Plants is empty</h2>
      </div>
    );
  }
}
