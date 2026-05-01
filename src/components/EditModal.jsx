import React, { useState, useEffect } from "react";
import Button from "./../UI/Button";
import toast from "react-hot-toast";

const EditModal = ({ open, product, onCancel, onSave, isEditing }) => {
  const [form, setForm] = useState({
    product_id: "",
    product_name: "",
    collection: "",
    description: "",
    price: "",
    roast_type: "",
    quantity: "",
    low_stock_threshold: "",
  });

  useEffect(() => {
    if (product && open) {
      setForm({
        product_id: product.product_id || "",
        product_name: product.product_name || "",
        collection: product.collection || "",
        description: product.description || "",
        price: product.price || "",
        roast_type: product.roast_type || "",
        quantity: product.quantity || "",
        low_stock_threshold: product.low_stock_threshold || "15",
      });
    }
  }, [product, open]);

  if (!open || !product) return null;

  const handleSubmit = () => {
    if (
      !form.product_name ||
      !form.collection ||
      !form.description ||
      form.price === "" ||
      form.quantity === "" ||
      form.low_stock_threshold === ""
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto shadow-lg flex flex-col">
        <div className="bg-[#FEF2DF] p-5 rounded-t-2xl border-b border-[#EBE1D6]">
          <h2 className="text-xl font-bold mb-1 text-primary-coffee">
            Edit Product Details
          </h2>
          <p className="text-[#504442] text-sm">
            Update inventory information and identity for this batch.
          </p>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-bold text-primary-coffee mb-4 pb-2 border-b border-gray-100">
              Bean Identity
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-medium mb-1 text-[#504442]">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={form.product_name}
                    onChange={(e) =>
                      setForm({ ...form, product_name: e.target.value })
                    }
                    className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                    placeholder="Product Name"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-medium mb-1 text-[#504442]">
                    Collection
                  </label>
                  <select
                    value={form.collection}
                    onChange={(e) =>
                      setForm({ ...form, collection: e.target.value })
                    }
                    className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                  >
                    <option value="">Select Category</option>
                    <option value="fresh brews">Fresh Brews</option>
                    <option value="handmade croissants">
                      Handmade Croissants
                    </option>
                    <option value="artisanal toasts">Artisanal Toasts</option>
                    <option value="seasonal specials">Seasonal Specials</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="text-sm font-medium mb-1 text-[#504442]">
                    Price (EGP)
                  </label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: Number(e.target.value) })
                    }
                    className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                    placeholder="Price"
                  />
                </div>
                <div className="flex flex-col flex-2">
                  <label className="text-sm font-medium mb-1 text-[#504442]">
                    Description
                  </label>
                  <input
                    type="text"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                    placeholder="Brief description..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-coffee mb-4 pb-2 border-b border-gray-100">
              Inventory Levels
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-1 text-[#504442]">
                  Roast Type
                </label>
                <select
                  value={form.roast_type}
                  onChange={(e) =>
                    setForm({ ...form, roast_type: e.target.value })
                  }
                  className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                >
                  <option value="">Select Roast</option>
                  <option value="Light">Light Roast</option>
                  <option value="Medium">Medium Roast</option>
                  <option value="Dark">Dark Roast</option>
                </select>
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-1 text-[#504442]">
                  Current Stock
                </label>
                <input
                  type="number"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: Number(e.target.value) })
                  }
                  className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                  placeholder="Quantity"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium mb-1 text-[#504442]">
                  Reorder Point
                </label>
                <input
                  type="number"
                  value={form.low_stock_threshold}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      low_stock_threshold: Number(e.target.value),
                    })
                  }
                  className="w-full border p-2.5 rounded-lg bg-[#EDE1CF4D] text-primary-coffee text-sm focus:outline-none focus:ring-2 focus:ring-[#C2885D]"
                  placeholder="e.g. 15"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 bg-[#FCF6ED] p-5 rounded-b-2xl border-t border-[#EBE1D6]">
          <Button type="secondary" onClick={onCancel} disabled={isEditing}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isEditing}>
            {isEditing ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
