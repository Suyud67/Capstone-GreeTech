const BASE_URL = 'https://be-greetech.onrender.com';

const getAllPlant = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data.products;
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
  const response = await fetch(`${BASE_URL}/product/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });

  const data = await response.json();
  return data;
};

export { getAllPlant, getPlant, addPlant };
