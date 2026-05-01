import React, { useState } from "react";
import Button from "./../UI/Button";
import toast from "react-hot-toast";
import { uploadImage } from "../utils/uploadImage";

const AddProductModal = ({ open, onCancel, onAdd, isAdding }) => {
  const [form, setForm] = useState({
    product_name: "",
    collection: "",
    description: "",
    roast_type: "",
    price: "",
    quantity: "",
    image: null,
  });

  const [isUploading, setIsUploading] = useState(false);

  if (!open) return null;

  function resetForm() {
    setForm({
      product_name: "",
      collection: "",
      description: "",
      roast_type: "",
      price: "",
      quantity: "",
      image: null,
    });
  }

  async function handleSubmit() {
    if (
      !form.product_name ||
      !form.image ||
      !form.price ||
      !form.quantity ||
      !form.collection
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsUploading(true);

    try {
      const imageUrl = await uploadImage(form.image);

      const finalProductData = {
        product_name: form.product_name,
        collection: form.collection,
        description: form.description,
        roast_type: form.roast_type,
        price: form.price,
        quantity: form.quantity,
        image_url: imageUrl,
      };

      onAdd(finalProductData);
      resetForm();
    } catch (error) {
      toast.error("Failed to upload the image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto shadow-lg flex flex-col">
        <div className="px-6 pt-6 mb-4">
          <h2 className="text-xl font-bold mb-1 text-[#271310]">
            Add New Roast
          </h2>
          <p className="text-[#504442] text-sm">
            Enter the details for the new coffee batch.
          </p>
        </div>

        <div className="px-6 pb-6 flex-1 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#271310]">
              Product Name
            </label>
            <input
              type="text"
              value={form.product_name}
              placeholder="Enter Product Name"
              className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
              onChange={(e) =>
                setForm({ ...form, product_name: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#271310]">
              Description
            </label>
            <textarea
              rows="2"
              value={form.description}
              placeholder="Enter Product Details"
              className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          {/* Image File Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-[#271310]">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 rounded-lg bg-[#EDE1CF4D] text-[#271310] text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#775A19] file:text-white hover:file:bg-[#5c3e2e] cursor-pointer"
              onChange={(e) => {
                const file = e.target.files[0];
                setForm({ ...form, image: file });
              }}
            />
          </div>

          {/* Collection & Roast Type */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1 text-[#271310]">
                Collection
              </label>
              <select
                value={form.collection}
                onChange={(e) =>
                  setForm({ ...form, collection: e.target.value })
                }
                className="w-full border p-2 rounded mb-4 bg-[#EDE1CF4D] text-[#271310] text-xm"
              >
                <option value="">Select Category</option>
                <option value="fresh brews">Fresh Brews</option>
                <option value="handmade croissants">Handmade Croissants</option>
                <option value="artisanal toasts">Artisanal Toasts</option>
                <option value="seasonal specials">Seasonal Specials</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1 text-[#271310]">
                Roast Type
              </label>
              <select
                value={form.roast_type}
                onChange={(e) =>
                  setForm({ ...form, roast_type: e.target.value })
                }
                className="w-full border p-2 rounded mb-4 bg-[#EDE1CF4D] text-[#271310] text-xm"
              >
                <option value="">Select Roast Type</option>
                <option value="Light">Light Roast</option>
                <option value="Medium">Medium Roast</option>
                <option value="Dark">Dark Roast</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1 text-[#271310]">
                Quantity
              </label>
              <input
                type="number"
                value={form.quantity}
                placeholder="quantity of product"
                className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                onChange={(e) =>
                  setForm({ ...form, quantity: Number(e.target.value) })
                }
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium mb-1 text-[#271310]">
                Price (EGP)
              </label>
              <input
                type="number"
                value={form.price}
                placeholder="Price"
                className="w-full border p-2 rounded mb-3 bg-[#EDE1CF4D] text-[#271310] text-xm"
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 bg-[#FCF6ED] p-5 rounded-b-2xl border-t border-[#EBE1D6]">
          <Button
            type="secondary"
            onClick={onCancel}
            disabled={isUploading || isAdding}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isUploading || isAdding}>
            {isUploading ? "Uploading..." : "Save Product"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
