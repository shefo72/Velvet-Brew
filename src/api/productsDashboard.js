import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getAllProducts() {
  const response = await axios.get(
    `${BASE_URL}/api_products.php?action=get_products`,
  );
  return response.data;
}

export async function addProduct(newProductData) {
  const response = await axios.post(
    `${BASE_URL}/api_products.php?action=add_product`,
    newProductData,
  );
  return response.data;
}

export async function deleteProduct(id) {
  const response = await axios.post(
    `${BASE_URL}/api_products.php?action=delete_product`,
    { product_id: id },
  );
  return response.data;
}

export async function editProduct(newProductData) {
  const response = await axios.post(
    `${BASE_URL}/api_products.php?action=update_product`,
    newProductData,
  );
  return response.data;
}
