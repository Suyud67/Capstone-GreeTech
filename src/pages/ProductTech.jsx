import { useState, useEffect } from 'react';
import ItemsTech from '../component/ItemsTech';
import BtnAddProduct from '../event/BtnAddProduct';
import { getAllPlant } from '../data/GreeTechPlants';

export default function ProductTech() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getAllPlant();
      setProduct(data);
    };

    getAllProducts();
  }, [products]);

  return (
    <div className="relative mt-28">
      <h1 className="text-center text-xl font-bold">Product</h1>
      <ItemsTech plants={products} />

      <BtnAddProduct />
    </div>
  );
}
