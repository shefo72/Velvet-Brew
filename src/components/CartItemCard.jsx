import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";

import { formatCurrency } from "../utils/helpers";

function CartItemCard({ item }) {
  const { product_id, product_name, image_url, price, description, quantity } =
    item;
  const dispatch = useDispatch();

  function handleInc(product_id) {
    dispatch({
      type: "cart/incrementQuantity",
      payload: product_id,
    });

    toast.success(
      <span>
        Added another <b>{item.product_name}</b>
      </span>,
    );
  }

  function handleDec(product_id) {
    dispatch({
      type: "cart/decrementQuantity",
      payload: product_id,
    });

    toast.success(
      <span>
        Removed one <b>{item.product_name}</b>
      </span>,
    );
  }

  function handleDelete() {
    dispatch({ type: "cart/removeItem", payload: product_id });

    toast.success(
      <span>
        <b>{item.product_name}</b> removed from cart
      </span>,
    );
  }

  return (
    <div>
      <div className="flex items-center gap-6 pb-5">
        <img
          src={image_url}
          alt={product_name}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-sm"
        />

        <div className="flex-1 flex flex-col justify-between h-full py-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-primary-coffee">
                {product_name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {description}
              </p>
            </div>
            <button
              onClick={() => {
                handleDelete(product_id);
              }}
              className="text-gray-400 cursor-pointer hover:text-red-900 transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center bg-[#F8ECDA] rounded-full px-3 py-1">
              <button
                className="text-primary-coffee cursor-pointer hover:text-black w-6 flex justify-center pb-1"
                onClick={() => {
                  handleDec(product_id);
                }}
              >
                -
              </button>
              <span className="text-sm font-bold text-primary-coffee w-6 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => {
                  handleInc(product_id);
                }}
                className="text-primary-coffee cursor-pointer hover:text-black w-6 flex justify-center pb-1"
              >
                +
              </button>
            </div>

            <span className="font-bold text-primary-coffee">
              {formatCurrency(price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
