import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Lock, ArrowRight, Cookie, Trash } from "lucide-react";
import toast from "react-hot-toast";

import Button from "./../UI/Button";
import EmptyCart from "../components/EmptyCart";
import OrderSummary from "../components/OrderSummary";
import CartItemCard from "../components/CartItemCard";
import FullPageSpinner from "./../UI/FullPageSpinner";

import { fetchCartItems } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { items: cartItems, status } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (user && user.customer_id) {
      dispatch(fetchCartItems(user.customer_id));
    }
  }, [dispatch, user]);

  if (status === "loading" && cartItems.length === 0) {
    return <FullPageSpinner />;
  }

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="relative min-h-screen bg-[#FFF8F2] pt-16 pb-16 px-6 lg:px-20 font-sans">
      {status === "loading" && cartItems.length > 0 && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px] z-50 flex items-center justify-center "></div>
      )}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#3a2d28] mb-2">
            Your Cart
          </h1>
          <p className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-semibold">
            Review your artisanal selection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8 divide-y divide-[#d3c3c0d0]">
            {cartItems.map((item) => (
              <CartItemCard item={item} key={item.product_id} />
            ))}
          </div>
          <OrderSummary hideCheckoutButton={false} />
        </div>
      </div>
    </main>
  );
}

export default Cart;
