import React from 'react';
import BtnPrevPage from '../event/BtnPrevPage';
import FormAddProduct from '../component/FormAddProduct';
import { addPlant } from '../data/GreeTechPlants';

export default function AddProductPage() {
  const handleAddPlant = async (plant) => {
    const data = await addPlant(plant);
    console.log(data);
  };

  return (
    <div className="container-form mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="header-form  mb-5 text-center text-2xl font-bold">
        <h2>Form Add Product</h2>
      </div>
      <FormAddProduct addPlant={handleAddPlant} />
    </div>
  );
}
