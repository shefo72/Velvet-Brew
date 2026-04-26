import { ShoppingBag } from "lucide-react";
import Button from "./Button";

function ProductCard({ product }) {
  const { image, title, price, description, isBestseller } = product;

  return (
    <div className="bg-[#FFFFFF] rounded-xl flex flex-col min-w-50 max-w-75 overflow-hidden w-full border border-[#EBE1D6]">
      <div className="relative h-60 md:h-70 w-full shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isBestseller && (
          <span className="absolute top-4 left-4 bg-[#FFFFFFE5] backdrop-blur-sm text-primary-coffee text-[10px] md:text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-primary-coffee font-semibold text-base md:text-lg leading-tight">
            {title}
          </h3>
          <span className="font-bold text-primary-coffee text-sm md:text-base">
            {price}
          </span>
        </div>
        <p className="text-primary-coffee/50 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>
        <Button icon={<ShoppingBag size={18} />}>Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
