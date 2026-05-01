import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../api/productsDashboard";
import toast from "react-hot-toast";

export function useAddProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard_products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully");
    },
    onError: (err) => {
      console.error("Error adding product:", err);
      toast.error("Error adding product");
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard_products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully");
    },

    onError: (err) => {
      console.error("Error deleting product:", err);
      toast.error("Error deleting product");
    },
  });
}

export function useEditProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard_products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product Updated successfully");
    },

    onError: (err) => {
      console.error("Error Updating product:", err);
      toast.error("Error Updating product");
    },
  });
}
