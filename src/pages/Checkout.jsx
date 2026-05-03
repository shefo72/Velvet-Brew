import { CreditCard, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createOrderApi } from "../api/orderApi";
import Button from "../UI/Button";
import OrderSummary from "../components/OrderSummary";

function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (data) => {
      toast.success("Order placed successfully!");
      const returnedOrderId = data.order_id || data.id;
      navigate(`/orders/${returnedOrderId}`);
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong.");
    },
  });

  function onSubmit(formData) {
    if (items.length === 0) {
      console.log("qq", items);
      toast.error("Your cart is empty!");
      return;
    }

    const payload = {
      customer_id: user?.customer_id,
      shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        street_address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        shipping_method: "Standard",
      },
      payment: {
        card_number: formData.cardNumber,
        expiration_date: formData.expirationDate,
        cvv: formData.cvv,
      },
    };

    console.log("Sending Payload:", payload);
    mutate(payload);
  }

  const baseInputClass =
    "w-full bg-transparent py-2 text-sm focus:outline-none transition-all duration-300 border-b border-primary-coffee/30 focus:border-coffee-hover";

  return (
    <div className="min-h-screen bg-secondary-coffee text-primary-coffee font-sans pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
          {/* Section 01: Shipping */}
          <section className="max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-playfair text-5xl font-light text-primary-coffee mb-3 leading-none">
                01
              </span>
              <h2 className="text-2xl font-bold tracking-wide font-playfair w-full">
                Shipping Details
              </h2>
            </div>

            <div className="bg-[#faf4ef] rounded-2xl border border-primary-coffee/10 p-6 md:p-8 space-y-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="Artisan"
                    className={baseInputClass}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Brewer"
                    className={baseInputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                  Street Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="123 Espresso Lane"
                  className={baseInputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    City
                  </label>
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="Roastville"
                    className={baseInputClass}
                  />
                </div>
                <div className="sm:w-24">
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    State
                  </label>
                  <input
                    {...register("state")}
                    type="text"
                    placeholder="CA"
                    maxLength="8"
                    className={baseInputClass}
                  />
                </div>
                <div className="sm:w-28">
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    Zip
                  </label>
                  <input
                    {...register("zip")}
                    type="text"
                    placeholder="90210"
                    maxLength="5  "
                    className={baseInputClass}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: Payment */}
          <section className="max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-playfair text-5xl font-light text-primary-coffee mb-3 leading-none">
                02
              </span>
              <h2 className="text-2xl font-bold tracking-wide font-playfair w-full">
                Payment
              </h2>
            </div>

            <div className="bg-[#faf4ef] rounded-2xl border border-primary-coffee/10 p-6 md:p-8 space-y-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-primary-coffee/10 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold tracking-wide">
                  <CreditCard size={20} /> Credit Card
                </div>
                <span className="text-[10px] font-bold opacity-60">SECURE</span>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                  Card Number
                </label>
                <input
                  {...register("cardNumber")}
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  maxLength="16"
                  className={baseInputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    {...register("expirationDate", {
                      required: "Required",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                        message: "Use MM/YY format",
                      },
                    })}
                    type="text"
                    placeholder="05/26"
                    maxLength="5"
                    className={baseInputClass}
                  />
                  {errors?.expirationDate && (
                    <span className="text-red-500 text-[10px]">
                      {errors.expirationDate.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase mb-1">
                    CVV
                  </label>
                  <input
                    {...register("cvv")}
                    type="password"
                    placeholder="•••"
                    maxLength="3"
                    className={baseInputClass}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="pt-6 flex justify-center lg:justify-end">
            <Button disabled={isPending}>
              {isPending ? "Processing..." : "Place Order & Pay"}
            </Button>
          </div>
        </form>

        <aside className="hidden lg:block">
          <div className="sticky top-10 flex flex-col gap-4">
            <OrderSummary hideCheckoutButton={true} />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
