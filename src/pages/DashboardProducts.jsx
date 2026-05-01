import React, { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";

import { getAllProducts } from "../api/productsDashboard";
import {
  useAddProduct,
  useDeleteProduct,
  useEditProduct,
} from "../hooks/useProductsMutations";

import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import AddProductModal from "../components/AddProductModal";
import ProductRow from "./../components/ProductRow";
import FullPageSpinner from "../UI/FullPageSpinner";
import Button from "../UI/Button";

const DashboardProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["dashboard_products"],
    queryFn: getAllProducts,
  });

  const { mutate: createProduct, isPending: isAdding } = useAddProduct();
  const { mutate: editProduct, isPending: isEditing } = useEditProduct();
  const { mutate: deleteProduct, isPending: isDeleting } = useDeleteProduct();
  const productsList = productsData?.data || productsData || [];

  const handleEditClick = useCallback((product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  }, []);

  const handleDeleteClick = useCallback((product) => {
    setSelectedProduct(product);
    setOpenDelete(true);
  }, []);

  // CRUD
  const handleAddProduct = (newProduct) => {
    createProduct(newProduct, {
      onSuccess: () => setOpenAdd(false),
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id, {
      onSuccess: () => setOpenDelete(false),
    });
  };

  const handleEditSave = (updatedData) => {
    editProduct(updatedData, {
      onSuccess: () => setOpenEdit(false),
    });
  };

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-coffee">
            Product Catalog
          </h1>
          <p className="text-sm text-muted-coffee mt-0.5">
            Manage your active roast profiles, origins, and inventory levels.
          </p>
        </div>

        <Button type="primary" onClick={() => setOpenAdd(true)}>
          <Plus size={18} /> Add Product
        </Button>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-[#EBE1D6] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FCF6ED] border-b border-[#EBE1D6]">
                <th className="hidden md:block py-4 px-6 font-semibold text-primary-coffee text-sm whitespace-nowrap">
                  #Id
                </th>
                <th className="py-3 px-4 md:py-4 md:px-6 font-semibold text-primary-coffee text-sm whitespace-nowrap">
                  Product Details
                </th>
                <th className="py-3 px-4 md:py-4 md:px-6 font-semibold text-primary-coffee text-sm whitespace-nowrap">
                  Price
                </th>
                <th className="py-3 px-4 md:py-4 md:px-6 font-semibold text-primary-coffee text-sm whitespace-nowrap text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((product) => (
                <ProductRow
                  key={product.product_id}
                  product={product}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal
        open={openDelete}
        product={selectedProduct}
        onCancel={() => setOpenDelete(false)}
        onConfirm={() => handleDelete(selectedProduct?.product_id)}
        isDeleting={isDeleting}
      />
      <EditModal
        open={openEdit}
        product={selectedProduct}
        onCancel={() => setOpenEdit(false)}
        onSave={handleEditSave}
        isEditing={isEditing}
      />
      <AddProductModal
        open={openAdd}
        onCancel={() => setOpenAdd(false)}
        onAdd={handleAddProduct}
        isAdding={isAdding}
      />
    </main>
  );
};

export default DashboardProducts;
