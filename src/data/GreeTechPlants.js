const BASE_URL = 'https://be-greetech.onrender.com';
// const TEST_URL = 'http://localhost:5000';

const getAllPlant = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data.plants;
};

const getPlant = async (id) => {
  const response = await fetch(`${BASE_URL}/product/detail/${id}`);
  const result = await response.json();

  if (result.error) {
    return result;
  }

  return result;
};

const addPlant = async (plant) => {
  const product = new FormData();
  product.append('user', plant.user);
  product.append('nm_product', plant.nm_product);
  product.append('price_product', plant.price_product);
  product.append('noHp_user', plant.noHp_user);
  product.append('img_product', plant.img_product, plant.img_product.name);
  product.append('desc_product', plant.desc_product);

  const response = await fetch(`${BASE_URL}/product/add`, {
    method: 'POST',
    body: product,
  });

  const data = await response.json();
  return data;
};

export { getAllPlant, getPlant, addPlant };
