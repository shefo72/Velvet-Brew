import { ShoppingBag } from "lucide-react";
import Button from "../UI/Button";

function EmptyCart() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6">
      <ShoppingBag size={80} className="text-[#d4c5b9] mb-6" />
      <h2 className="text-3xl font-serif font-bold text-primary-coffee mb-4">
        Your Cart is Empty
      </h2>
      <p className="text-primary-coffee opacity-80 mb-8 text-center max-w-md">
        Looks like you haven't added any of our signature brews yet. Explore our
        artisanal menu to find your perfect cup.
      </p>

      <Button to="/menu">Explore Menu</Button>
    </main>
  );
}

export default EmptyCart;
