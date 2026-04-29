import { useDispatch, useSelector } from "react-redux";
import { Lock, ArrowRight, Cookie, Trash } from "lucide-react";
import toast from "react-hot-toast";

import Button from "./../UI/Button";
import EmptyCart from "../components/EmptyCart";
import CartSummary from "../components/CartSummary";
import CartItemCard from "../components/CartItemCard";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch({ type: "cart/clearCart" });
    toast.success("Your cart is now clear and fresh!");
  }

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-[#FFF8F2] pt-16 pb-16 px-6 lg:px-20 font-sans">
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
            <div className="text-end">
              <Button onClick={handleClearCart}>
                <Trash size={18} />
                Clear Cart
              </Button>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </main>
  );
}

export default Cart;
