import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCart(userId) {
  const response = await axios.get(
    `${BASE_URL}/cart.php?customer_id=${userId}`,
  );
  return response.data;
}

// cartData = { customer_id, product_id, quantity }
export async function addToCartApi(cartData) {
  const response = await axios.post(`${BASE_URL}/cart.php`, cartData);
  return response.data;
}

// updateData = { cart_id, quantity }
export async function updateCartQuantityApi(updateData) {
  const response = await axios.put(`${BASE_URL}/cart.php`, updateData);
  return response.data;
}

export async function removeFromCartApi(cartId) {
  const response = await axios.delete(`${BASE_URL}/cart.php`, {
    data: { cart_id: cartId },
  });
  return response.data;
}
