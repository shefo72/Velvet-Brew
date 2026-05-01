import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getTotalRevenue() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=total_revenue`,
  );
  return response.data;
}

export async function getOrdersTodayNumber() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=orders_today`,
  );
  return response.data;
}
export async function getAvgOrderValue() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=avg_order_value`,
  );
  return response.data;
}
export async function getTopRoast() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=top_roast`,
  );
  return response.data;
}
export async function getRecentOrders() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=recent_orders`,
  );
  return response.data;
}

export async function getInventory() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=inventory`,
  );
  return response.data;
}

export async function getLowStockInventory() {
  const response = await axios.get(
    `${BASE_URL}/api_dashboard.php?action=inventory&filter=low_stock`,
  );
  return response.data;
}
