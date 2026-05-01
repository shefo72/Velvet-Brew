import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ArrowRight, Lock } from "lucide-react";

import Button from "../UI/Button";
import { formatCurrency } from "../utils/helpers";

function CartSummary() {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const shipping = 5;
  const { tax, grandTotal } = useMemo(() => {
    const calculatedTax = Number((0.14 * totalAmount).toFixed(2));
    const calculatedGrandTotal = Number(
      (totalAmount + shipping + calculatedTax).toFixed(2),
    );

    return {
      tax: calculatedTax,
      grandTotal: calculatedGrandTotal,
    };
  }, [totalAmount]);

  return (
    <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-center lg:block">
      <div className="w-full max-w-88 sm:max-w-md lg:max-w-full h-fit bg-[#FEF2DF] rounded-3xl p-8 md:p-10 shadow-sm border border-secondary-coffee">
        <h2 className="font-serif text-2xl font-bold text-[#3a2d28] mb-6">
          Cart Summary
        </h2>

        <div className="flex flex-col gap-4 text-sm text-[#5c3e2e] mb-6 border-b border-muted-coffee pb-6">
          <div className="flex justify-between">
            <span>Items</span>
            <span className="font-bold">{totalQuantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">{formatCurrency(totalAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Shipping</span>
            <span className="font-bold">{formatCurrency(shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span className="font-bold">{formatCurrency(tax)}</span>
          </div>
        </div>

        <div className="flex justify-between items-end mb-8">
          <span className="text-[10px] font-bold text-[#8c6b5d] tracking-widest uppercase mb-1">
            Grand Total
          </span>
          <span className="font-serif text-3xl font-bold text-[#3a2d28]">
            {formatCurrency(grandTotal)}
          </span>
        </div>

        <div className="w-full">
          <Button className="w-full justify-center">
            Proceed to Checkout
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-[#8c6b5d]">
          <Lock size={14} />
          <span>Secure checkout powered by BrewPay</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
