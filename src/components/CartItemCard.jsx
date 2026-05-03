import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";

import { updateItemQuantity, removeItemFromCart } from "../store/cartSlice";
import { formatCurrency } from "../utils/helpers";

function CartItemCard({ item }) {
  const { cart_id, product_id, product_name, price, description, quantity } =
    item;

  const dispatch = useDispatch();

  function handleInc() {
    dispatch(
      updateItemQuantity({ cart_id, product_id, quantity: quantity + 1 }),
    )
      .unwrap()
      .then(() => {
        toast.success(
          <span>
            Added another <b>{product_name}</b>
          </span>,
        );
      })
      .catch(() => {});
  }

  function handleDec() {
    if (quantity === 1) {
      handleDelete();
      return;
    }

    dispatch(
      updateItemQuantity({ cart_id, product_id, quantity: quantity - 1 }),
    )
      .unwrap()
      .then(() => {
        toast.success(
          <span>
            Removed one <b>{product_name}</b>
          </span>,
        );
      });
  }

  function handleDelete() {
    dispatch(removeItemFromCart({ cart_id, product_id }))
      .unwrap()
      .then(() => {
        toast.success(
          <span>
            <b>{product_name}</b> removed from cart
          </span>,
        );
      });
  }

  return (
    <div className="py-2">
      {" "}
      {/* بادينج خفيف من فوق وتحت */}
      <div className="flex flex-col gap-4 pb-4">
        {/* الجزء العلوي: الاسم والوصف + زرار الحذف */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-lg md:text-xl font-bold text-primary-coffee">
              {product_name}
            </h3>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          <button
            onClick={handleDelete}
            className="text-gray-400 cursor-pointer hover:text-red-900 transition-colors p-1"
            title="Remove item"
          >
            <X size={22} />
          </button>
        </div>

        {/* الجزء السفلي: التحكم في الكمية + السعر */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-[#F8ECDA] rounded-full px-3 py-1.5 shadow-sm">
            <button
              className="text-primary-coffee cursor-pointer hover:text-black w-7 flex justify-center items-center pb-0.5 text-lg"
              onClick={handleDec}
            >
              -
            </button>
            <span className="text-sm font-bold text-primary-coffee w-8 text-center">
              {quantity}
            </span>
            <button
              onClick={handleInc}
              className="text-primary-coffee cursor-pointer hover:text-black w-7 flex justify-center items-center pb-0.5 text-lg"
            >
              +
            </button>
          </div>

          <span className="font-bold text-lg text-primary-coffee">
            {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
