import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getOrderConfirmation(orderId) {
  try {
    const response = await api.get("/order-confirm.php", {
      params: { order_id: orderId },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    throw new Error("Failed to fetch order details");
  }
}

export async function createOrderApi(orderPayload) {
  try {
    const response = await api.post("/checkout.php", orderPayload);
    return response.data;
  } catch (error) {
    throw new Error("Failed to place order");
  }
}
