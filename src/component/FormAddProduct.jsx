/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ButtonSubmit from '../event/ButtonSubmit';
import useInputHandle from '../utils/InputHook';

export default function FormAddProduct({ addPlant }) {
  // set-up useState for input user
  const [user, setUser] = useInputHandle('');
  const [nm_product, setPlantProduct] = useInputHandle('');
  const [price_product, setPrice] = useInputHandle('');
  const [desc_product, setDescription] = useInputHandle('');
  const [img_product, setImageProduct] = useState('');

  // event radio button
  const radioSellHandle = () => {
    return (document.querySelector('.plant-price').style.display = 'block');
  };

  const radioPromotionHandle = () => {
    return (document.querySelector('.plant-price').style.display = 'none');
  };

  // image upload handle
  const eventImage = (e) => {
    setImageProduct(e.target.files[0].name);
  };

  const eventSubmit = (e) => {
    e.preventDefault();
    addPlant({ user, nm_product, price_product, img_product, desc_product });

    e.target.reset();
  };

  return (
    <div className="form m-auto w-3/5 rounded-xl p-5">
      <form action="/product/add" method="post" onSubmit={eventSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input type="text" name="user" onChange={setUser} placeholder="input user name...." required />
        </div>
        <div className="product">
          <label htmlFor="product">Plant Name</label>
          <input type="text" name="nm_product" onChange={setPlantProduct} placeholder="plant name...." required />
        </div>
        <div className="promotion-sell">
          <input type="radio" name="promotion-sell" className="w-5" id="promotion" onClick={radioPromotionHandle} defaultChecked />
          <label htmlFor="promotion">Promotion</label> <br />
          <input type="radio" name="promotion-sell" className="w-5" id="sell" onClick={radioSellHandle} />
          <label htmlFor="sell">Sell</label>
        </div>
        <div className="plant-price hidden">
          <label htmlFor="plant-price" className="block">
            Plant Price
          </label>
          <input type="number" name="price_product" placeholder="plant price...." id="plant-price" className="w-2/6" onChange={setPrice} />
        </div>
        <div className="img-product">
          <label htmlFor="img-product" className="block">
            Product Image
          </label>
          <input type="file" name="img_product" required className="w-2/6 cursor-pointer text-white" onChange={eventImage} />
        </div>
        <div className="desc-product">
          <label htmlFor="desc-product">Description Product</label>
          <textarea name="desc_product" onChange={setDescription} placeholder="tell us about your plant..." required />
        </div>
        <ButtonSubmit />
      </form>
    </div>
  );
}
