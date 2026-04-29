import { X, Lock, ArrowRight, Cookie } from "lucide-react";
import Button from "./../UI/Button";

import Image1 from "../assets/products/1.png";
import Image2 from "../assets/products/2.png";
const initialCartItems = [
  {
    id: 1,
    name: "Velvet Cappuccino",
    details: "Regular, Whole Milk",
    price: 5.5,
    quantity: 1,
    image: Image1,
  },
  {
    id: 2,
    name: "Classic Butter Croissant",
    details: "Warm, House Jam",
    price: 4.25,
    quantity: 1,
    image: Image2,
  },
];

function Cart() {
  const cartItems = initialCartItems;
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
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
            {cartItems.map((item) => (
              <ItemCard item={item} />
            ))}
          </div>

          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6  items-center">
            <div className="bg-[#FEF2DF] rounded-3xl p-10 shadow-sm border  border-secondary-coffee">
              <h2 className="font-serif text-2xl font-bold text-[#3a2d28] mb-6">
                Cart Summary
              </h2>

              <div className="flex flex-col gap-4 text-sm text-[#5c3e2e] mb-6 border-b border-muted-coffee pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">$9.75</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-bold">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-bold">$0.85</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-[10px] font-bold text-[#8c6b5d] tracking-widest uppercase mb-1">
                  Grand Total
                </span>
                <span className="font-serif text-3xl font-bold text-[#3a2d28]">
                  $13.10
                </span>
              </div>

              <Button>
                Proceed to Checkout
                <ArrowRight size={18} />
              </Button>

              <div className="flex items-center justify-center gap-2 mt-5 text-xs text-[#8c6b5d]">
                <Lock size={14} />
                <span>Secure checkout powered by BrewPay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;

function ItemCard({ item }) {
  const { name, image, details } = item;
  return (
    <div>
      <div className="flex items-center gap-6">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-sm"
        />

        <div className="flex-1 flex flex-col justify-between h-full py-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-primary-coffee">
                {name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{details}</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center bg-[#F8ECDA] rounded-full px-3 py-1">
              <button className="text-primary-coffee hover:text-black w-6 flex justify-center pb-1">
                -
              </button>
              <span className="text-sm font-bold text-primary-coffee w-6 text-center">
                {item.quantity}
              </span>
              <button className="text-primary-coffee hover:text-black w-6 flex justify-center pb-1">
                +
              </button>
            </div>

            <span className="font-bold text-primary-coffee">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
