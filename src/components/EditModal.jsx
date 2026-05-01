import React, { useState, useEffect } from "react";

const EditModal = ({ open, product, onCancel, onSave }) => {
  const [form, setForm] = useState({
    product_name: "",
    base_price: "",
    category_name: "",
  });

  // لما المنتج يتغير نحط بياناته في الفورم
  useEffect(() => {
    if (product) {
      setForm({
        product_name: product.product_name,
        base_price: product.base_price,
        category_name: product.category_name,
      });
    }
  }, [product]);

  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white  rounded-2xl w-150 h-130 shadow-lg">
        <div className="bg-[#FEF2DF] p-3">
          <h2 className="text-lg font-bold mb-2 text-[#271310] ">
            {" "}
            Edit Product Details{" "}
          </h2>
          <p className="text-[#504442]">
            Update inventory information for this batch.
          </p>
        </div>
        <div className="p-3">
          <h2 className="text-xl text-[#271310]">Bean Identity</h2>
          <div className=" p-3 flex justify-between">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-[#504442]">
                Product Name
              </label>
              <input
                type="text"
                value={form.product_name}
                onChange={(e) =>
                  setForm({ ...form, product_name: e.target.value })
                }
                className="w-60 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col">
              {/* Category */}
              <label className="text-sm mb-1 text-[#504442]">Collection</label>
              <input
                type="text"
                value={form.category_name}
                onChange={(e) =>
                  setForm({ ...form, category_name: e.target.value })
                }
                className="w-60 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                placeholder="Category"
              />
            </div>
          </div>

          <div className=" px-3 flex justify-between">
            {/* Price */}
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-[#504442]">Price</label>
              <input
                type="number"
                value={form.base_price}
                onChange={(e) =>
                  setForm({ ...form, base_price: e.target.value })
                }
                className="w-60 border p-2 rounded mb-4  bg-[#EDE1CF4D] text-[#271310] text-xm"
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col">
              {/* Category */}
              <label className="text-sm mb-1 text-[#504442]">Description</label>
              <input
                type="text"
                value={form.category_name}
                onChange={(e) =>
                  setForm({ ...form, category_name: e.target.value })
                }
                className="w-60 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm  "
                placeholder="Category"
              />
            </div>
          </div>
        </div>

        <div className="p-3">
          <h2 className="text-xl text-[#271310]">Inventory Levels</h2>
          <div className="flex justify-between p-3">
            <div className="flex flex-col">
              {/* Label */}
              <label className="text-sm mb-1 text-[#504442]">Roast Type</label>

              {/* Select بدل input */}
              <select
                value={form.category_name}
                onChange={(e) =>
                  setForm({ ...form, category_name: e.target.value })
                }
                className="w-35 border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
              >
                <option value="">Select Roast</option>
                <option value="Light Roast">Light Roast</option>
                <option value="Medium Roast">Medium Roast</option>
                <option value="Dark Roast">Dark Roast</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-[#504442]">
                Current Stock (kg)
              </label>
              <input
                type="number"
                value={form.base_price}
                onChange={(e) =>
                  setForm({ ...form, base_price: e.target.value })
                }
                className="w-35 border p-2 rounded mb-4  bg-[#EDE1CF4D] text-[#271310] text-xm"
                placeholder="stock"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-[#504442]">
                Reorder Point
              </label>
              <input
                type="number"
                value={form.base_price}
                onChange={(e) =>
                  setForm({ ...form, base_price: e.target.value })
                }
                className="w-35 border p-2 rounded mb-4  bg-[#EDE1CF4D] text-[#271310] text-xm"
                placeholder="order point"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 bg-[#FEF2DF] p-4">
          <button
            onClick={() => onSave(form)}
            className="bg-[#271310] text-white px-4 py-1 rounded-xl hover:bg-[#3E2723]"
          >
            Save Changes
          </button>

          <button
            onClick={onCancel}
            className=" px-4 py-1 rounded-xl text-[#271310] hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
