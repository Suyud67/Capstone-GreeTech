import { useState, useEffect } from 'react';
import ItemsTech from '../component/ItemsTech';
import BtnAddProduct from '../event/BtnAddProduct';
import { getAllPlant } from '../data/GreeTechPlants';
import loadingGif from '../public/loading/loading.webp';

export default function ProductTech() {
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
      <div className="product-container relative">
        <h1 className="mb-4 text-center text-xl font-bold">Product</h1>
        <img src={loadingGif} alt="loading" className="m-auto" />

        <BtnAddProduct />
      </div>
    );
  }

  return (
    <div className="product-container relative mt-28">
      <h1 className="mb-4 text-center text-xl font-bold">Product</h1>
      <ItemsTech plants={products} />

      <BtnAddProduct />
    </div>
  );
}
