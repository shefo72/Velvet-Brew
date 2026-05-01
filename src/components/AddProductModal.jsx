import React, { useState } from "react";

const AddProductModal = ({ open, onCancel, onAdd }) => {
  const [form, setForm] = useState({
    product_name: "",
    category_name: "",
    base_price: "",
    image_url: "",
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white  rounded-2xl w-120 h-150 shadow-lg">
        <div className="px-6 pt-6 ">
          <h2 className="text-lg font-bold mb-1 text-[#271310]">
            Add New Roast
          </h2>
          <p className="text-[#504442] underline underline-offset-12">
            Enter the details for the new coffee batch.
          </p>
        </div>

        <div className="p-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-[#271310]">Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
              onChange={(e) =>
                setForm({ ...form, product_name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-[#271310]">Description</label>
            <input
              type="text"
              placeholder="Enter Product Details"
              className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
              onChange={(e) =>
                setForm({ ...form, product_description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-[#271310]">Image</label>
            {/* Image URL */}
            <input
              type="text"
              placeholder="Image URL"
              className="w-full border p-2 rounded mb-4 bg-[#EDE1CF4D] text-[#271310] text-xm"
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col">
              {/* Label */}
              <label className="text-sm mb-1 text-[#271310]">Collection</label>

              {/* Select بدل input */}
              <select
                value={form.category_name}
                onChange={(e) =>
                  setForm({ ...form, category_name: e.target.value })
                }
                className="w-50 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
              >
                <option value="">Select Category</option>
                <option value="Fresh Brews">Fresh Brews</option>
                <option value="Handmade Croissants">Handmade Croissants</option>
                <option value="Artisanal Toasts">Artisanal Toasts</option>
                <option value="Seasonal Specials">Seasonal Specials</option>
              </select>
            </div>
            <div className="flex flex-col">
              {/* Label */}
              <label className="text-sm mb-1 text-[#271310]">Roast Type</label>

              {/* Select بدل input */}
              <select
                value={form.roast_type}
                onChange={(e) =>
                  setForm({ ...form, roast_type: e.target.value })
                }
                className="w-50 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
              >
                <option value="">Select Roast Type</option>
                <option value="Light Roast">Light Roast</option>
                <option value="Medium Roast">Medium Roast</option>
                <option value="Dark Roast">Dark Roast</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col">
              {/* Roast */}
              <label className="text-sm mb-1 text-[#271310]">Quantity</label>
              {/* quantity */}
              <input
                type="number"
                placeholder="quantity of product"
                className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              {/* Roast */}
              <label className="text-sm mb-1 text-[#271310]">Price</label>
              {/* Price */}
              <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                onChange={(e) =>
                  setForm({ ...form, base_price: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex  gap-4 bg-[#FEF2DF] p-6 rounded-xl">
          <button
            onClick={() => {
              onAdd(form);
              setForm({
                product_name: "",
                category_name: "",
                base_price: "",
                image_url: "",
              });
            }}
            className="bg-[#3E2723] text-white px-4 py-1 rounded-xl"
          >
            Add Product
          </button>

          <button
            onClick={onCancel}
            className="text-[#3E2723] px-4 py-1 rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
