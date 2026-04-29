import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import Button from "../UI/Button";
import { formatCurrency } from "../utils/helpers";

function ProductCard({ product }) {
  const { image_url, product_name, base_price, badge } = product;
  const dispatch = useDispatch();

  function handleAdd(product) {
    const itemToAdd = {
      ...product,
      quantity: 1,
      totalPrice: product.base_price,
    };

    dispatch({ type: "cart/addToCart", payload: itemToAdd });
    toast.success(
      <span>
        <b>{product.product_name}</b> added to your cart!
      </span>,
    );
  }

  return (
    <div className="group bg-[#FFFFFF] rounded-xl flex flex-col min-w-50 max-w-75 overflow-hidden w-full border border-[#EBE1D6] cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 md:h-70 w-full shrink-0 overflow-hidden">
        <img
          src={image_url}
          alt={product_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-[#FFFFFFE5] backdrop-blur-sm text-primary-coffee text-[10px] md:text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider uppercase">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-primary-coffee font-semibold text-base md:text-lg leading-tight">
            {product_name}
          </h3>
          <span className="font-bold text-[#775A19] text-sm md:text-base">
            {formatCurrency(base_price)}
          </span>
        </div>
        <p className="text-primary-coffee/50 text-sm leading-relaxed mb-6 grow">
          {/* {description} */}
          Velvety micro-foam poured over a double ristretto for a smooth, creamy
          balance.
        </p>
        <Button
          icon={<ShoppingBag size={18} />}
          onClick={() => handleAdd(product)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
