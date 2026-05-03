import { ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Button from "../UI/Button";
import { formatCurrency } from "../utils/helpers";
import { addItemToCart } from "../store/cartSlice";

function MenuProductCard({ product }) {
  const { product_name, description, image_url, price, product_id } = product;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  function handleAdd(product) {
    if (!user || !user.customer_id) {
      toast.error("Please login to add items to your cart!");
      return;
    }

    const itemToAdd = {
      ...product,
      customer_id: user.customer_id,
      product_id: product.id || product.product_id,
      quantity: 1,
    };

    dispatch(addItemToCart(itemToAdd))
      .unwrap()
      .then(() => {
        toast.success(
          <span>
            <b>{product.product_name}</b> added to your cart!
          </span>,
        );
      })
      .catch(() => {});
  }

  return (
    <div className="group bg-[#FFFFFF] rounded-xl flex flex-col min-w-50 max-w-75 overflow-hidden w-full border border-[#EBE1D6] cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 md:h-70 w-full shrink-0 overflow-hidden">
        <img
          src={image_url}
          alt={product_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-primary-coffee font-semibold text-base md:text-lg leading-tight">
            {product_name}
          </h3>
          <span className="font-bold text-[#775A19] text-sm md:text-base">
            {formatCurrency(price)}
          </span>
        </div>
        <p className="text-primary-coffee/50 text-sm leading-relaxed mb-6 grow">
          {description}
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

export default MenuProductCard;
