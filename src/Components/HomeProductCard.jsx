import { memo } from "react";
import { PlusCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { formatCurrency } from "../utils/helpers";

const ProductCard = memo(function ProductCard({ product }) {
  const { image_url, product_name, price, description } = product;
  const dispatch = useDispatch();

  function handleAdd(product) {
    const itemToAdd = {
      ...product,
      quantity: 1,
      totalPrice: product.price,
    };

    dispatch({ type: "cart/addToCart", payload: itemToAdd });
    toast.success(
      <span>
        <b>{product.product_name}</b> added to your cart!
      </span>,
    );
  }

  return (
    <div className="group bg-white cursor-pointer rounded-4xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-50">
      <div className="w-full aspect-square mb-5 overflow-hidden rounded-4xl shrink-0">
        <img
          src={image_url}
          alt={product_name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-primary-coffee mb-2 line-clamp-2 min-h-14">
          {product_name}
        </h3>

        <p className="text-sm text-[#50453E] leading-relaxed line-clamp-2 mb-6 min-h-12">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-lg text-primary-coffee">
            {formatCurrency(price)}
          </span>
          <button
            onClick={() => {
              handleAdd(product);
            }}
            className="text-gray-400 cursor-pointer hover:text-coffee-hover transition-colors"
          >
            <PlusCircle size={26} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
