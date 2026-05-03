import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CircleCheck, Truck, X } from "lucide-react";
import Button from "../UI/Button";
import FullPageSpinner from "../UI/FullPageSpinner";
import { getOrderConfirmation } from "../api/orderApi";
import QueryError from "../UI/QueryError";
import { formatCurrency } from "../utils/helpers";

export default function OrderConfirmation() {
  const { orderId } = useParams();

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderConfirmation(orderId),
    enabled: !!orderId,
  });

  if (isLoading) return <FullPageSpinner />;

  if (isError) {
    return (
      <QueryError error="Failed to connect to the server. Please try again later." />
    );
  }

  if (response && response.success === false) {
    const errorMessage = "No order found with this ID. Please try again!";
    return <QueryError error={errorMessage} />;
  }

  if (!response || !response.data) {
    return (
      <QueryError error="Failed to load order data. Please contact support." />
    );
  }

  const orderData = response.data;
  console.log(orderData);
  const itemsList = orderData.items || [];
  const subtotal = orderData.summary?.subtotal || 0;
  const deliveryFee = orderData.summary?.delivery_fee || 0;
  const total = orderData.summary?.total || 0;
  const status = orderData.status || "being prepared";
  const estimatedArrival = orderData.estimated_arrival || "15 - 25 mins";
  const displayedOrderId = orderData.order_id || orderId;

  const addressObj = orderData.shipping_address || {};
  const address = addressObj.street_address
    ? `${addressObj.street_address}\n${addressObj.city || ""}, ${addressObj.state || ""} ${addressObj.zip || ""}`
    : "Address not available";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative bg-[#FFF8F2] ">
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center gap-6">
        <div className="animate-pop-in w-20 h-20 rounded-full bg-[#e8ddd0] flex items-center justify-center shadow-sm">
          <CircleCheck
            size={45}
            fill="#8b6f3e"
            color="#e8ddd0"
            strokeWidth={2}
          />
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-medium text-primary-coffee leading-tight font-['Playfair_Display',serif]">
            Your Ritual is on its Way.
          </h1>
          <p className="mt-3 text-[#7a6650] text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            Thank you for choosing Velvet Brew. Your order{" "}
            <span className="font-semibold text-[#4a3520]">
              #{displayedOrderId}
            </span>{" "}
            is <span className="capitalize">{status}</span>.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-4 mt-2">
          {/* Order Summary */}
          <div className="sm:col-span-3 bg-white rounded-2xl p-5 shadow-sm text-left">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold tracking-[0.08em] text-primary-coffee uppercase">
                Order Summary
              </h2>
              <span className="text-xs text-[#9e866e] uppercase tracking-widest">
                {itemsList.length} Items
              </span>
            </div>

            {itemsList.map((item, index) => (
              <div
                key={item.product_id || index}
                className="flex items-center gap-4 py-4 border-t border-[#e8ddd0] first:border-t-0"
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-sm font-bold text-primary-coffee bg-[#F8ECDA] w-7 h-7 flex items-center justify-center rounded-full">
                    {item.quantity}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold">×</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="font-medium text-primary-coffee text-sm truncate"
                    title={item.product_name || item.name}
                  >
                    {item.product_name || item.name}
                  </p>
                  <p className="text-[10px] text-gray-600">
                    {formatCurrency(item.price)} each
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-primary-coffee">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}

            <div className="mt-3 pt-3 border-t border-[#e8ddd0] space-y-1.5">
              <div className="flex justify-between text-sm font-semibold text-primary-coffee pt-1">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="sm:col-span-2 bg-[#fdf0e0] rounded-2xl p-5 text-left flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#8b6f3e] uppercase mb-1">
                Estimated Arrival
              </p>
              <p className="text-3xl font-medium text-primary-coffee font-['Playfair_Display',serif]">
                {estimatedArrival}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#8b6f3e] uppercase mb-1">
                Shipping Address
              </p>
              <p className="text-sm text-[#4a3520] leading-relaxed whitespace-pre-line">
                {address}
              </p>
            </div>
            {/* Map Placeholder */}
            <div className="bg-[#e8ddd0] rounded-xl flex-1 min-h-25 flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-[#8b6f3e] rounded-full border-[3px] border-white shadow-[0_0_0_3px_rgba(139,111,62,0.3)]"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-1">
          <Button to="/menu" type="secondary">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
