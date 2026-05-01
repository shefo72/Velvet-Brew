import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import { products as initialProducts } from "../data/fakeProducts";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import AddProductModal from "../components/AddProductModal";
import Button from "../UI/Button";

const DashboardProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.product_id !== id));
  };

  const handleEditSave = (updatedData) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.product_id === selectedProduct.product_id
          ? { ...item, ...updatedData }
          : item,
      ),
    );

    setOpenEdit(false);
  };

  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      product_id: Date.now(), // id مؤقت
    };

    setProducts((prev) => [...prev, productWithId]);
    setOpenAdd(false);
  };

  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
      {/* Header */}
      <div className="p-4 flex justify-between">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-coffee">
            Product Catalog
          </h1>
          <p className="text-sm text-muted-coffee mt-0.5">
            Manage your active roast profiles, origins, and inventory levels.
          </p>
        </div>

        <Button type="primary" onClick={() => setOpenAdd(true)}>
          + Add Product
        </Button>
      </div>

      {/* Products */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            product={product}
            setSelectedProduct={setSelectedProduct}
            setOpenEdit={setOpenEdit}
            setOpenDelete={setOpenDelete}
          />
        ))}
      </div>
      <DeleteModal
        open={openDelete}
        product={selectedProduct}
        onCancel={() => setOpenDelete(false)}
        onConfirm={() => {
          handleDelete(selectedProduct.product_id);
          setOpenDelete(false);
        }}
      />
      <EditModal
        open={openEdit}
        product={selectedProduct}
        onCancel={() => setOpenEdit(false)}
        onSave={handleEditSave}
      />
      <AddProductModal
        open={openAdd}
        onCancel={() => setOpenAdd(false)}
        onAdd={handleAddProduct}
      />
    </main>
  );
};

export default DashboardProducts;

function ProductCard({
  product,
  setSelectedProduct,
  setOpenEdit,
  setOpenDelete,
}) {
  const { product_id, image_url, product_name, base_price } = product;

  return (
    <div className="bg-white  pb-4 rounded-2xl shadow-sm flex flex-col gap-3  items-center">
      {/* Image */}
      <img
        src={image_url}
        alt={product_name}
        className="w-full h-56 md:w-full md:h-full object-cover  rounded-t-2xl"
      />

      {/* Info */}
      <div className="flex-1 text-center px-2">
        <h3 className="text-xl font-bold text-primary-coffee">
          {product_name}
        </h3>

        <p className="text-sm text-gray-500">{product.category_name}</p>

        <div className="mt-2 font-bold text-primary-coffee text-xl">
          ${base_price}
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        {/* buttons */}

        <div className="flex justify-center gap-4 ">
          <button
            onClick={() => {
              setSelectedProduct(product);
              setOpenEdit(true);
            }}
            className=" text-[#504442] cursor-pointer px-3 py-1 rounded-full"
          >
            <Pencil size={20} />
          </button>

          <button
            className="text-[#504442] cursor-pointer px-3 py-1 rounded-full"
            onClick={() => {
              setSelectedProduct(product);
              setOpenDelete(true);
            }}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
