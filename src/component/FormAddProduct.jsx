/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonSubmit from '../event/ButtonSubmit';
import useInputHandle from '../utils/InputHook';

export default function FormAddProduct() {
  // set-up useState for input user
  const [username, setUsername] = useInputHandle('');
  const [plant, setPlant] = useInputHandle('');
  const [description, setDescription] = useInputHandle('');

  // event radio button
  const radioSellHandle = () => {
    return (document.querySelector('.plant-price').style.display = 'block');
  };

  const radioPromotionHandle = () => {
    return (document.querySelector('.plant-price').style.display = 'none');
  };

  const eventSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    e.target.reset();
  };

  return (
    <div className="form m-auto w-3/5 rounded-xl p-5">
      <form action="/product/add" method="post" onSubmit={eventSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input type="text" name="user" onChange={setUsername} placeholder="input user name...." required />
        </div>
        <div className="product">
          <label htmlFor="product">Plant Name</label>
          <input type="text" name="nm_product" onChange={setPlant} placeholder="plant name...." required />
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
          <input type="number" name="price_product" placeholder="plant price...." id="plant-price" className="w-2/6" />
        </div>
        <div className="img-product">
          <label htmlFor="img-product" className="block">
            Product Image
          </label>
          <input type="file" name="img_product" required className="w-2/6 cursor-pointer text-white" />
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
