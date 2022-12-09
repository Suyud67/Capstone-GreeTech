import React from 'react';
import BtnPrevPage from '../event/BtnPrevPage';
import { useNavigate } from 'react-router-dom';
import FormAddProduct from '../component/FormAddProduct';
import { addPlant } from '../data/GreeTechPlants';

export default function AddProductPage() {
  const navigate = useNavigate();

  const handleAddPlant = async (plant) => {
    const { error, message } = await addPlant(plant);
    if (error) {
      window.alert(message || message.msg);
    } else {
      window.alert(message);
      navigate('/Products');
    }
  };

  return (
    <div className="container-form mt-24 mb-40">
      <div className="lg:hidden">
        <BtnPrevPage />
      </div>
      <div className="header-form  mb-5 text-center text-2xl font-bold">
        <h2>Form Add Product</h2>
      </div>
      <FormAddProduct newPlant={handleAddPlant} />
    </div>
  );
}
