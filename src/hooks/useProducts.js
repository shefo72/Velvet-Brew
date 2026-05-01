import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getProducts } from "../api/productsApi";
import { capitalizeFirstLetter } from "../utils/helpers";

export function useProducts() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
  });

  const allProducts = useMemo(() => {
    return (query.data?.data || []).flatMap(
      (collection) => collection.products || [],
    );
  }, [query.data]);

  const categories = useMemo(() => {
    return [
      ...(query?.data?.data.map((collection, index) => ({
        id: index,
        label: capitalizeFirstLetter(collection.collection_name),
      })) || []),
    ];
  }, [query.data]);

  return {
    ...query,
    allProducts,
    categories,
  };
}
