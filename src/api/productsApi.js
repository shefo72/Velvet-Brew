import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts() {
  const response = await axios.get(`${BASE_URL}/products.php`);
  return response.data;
}
