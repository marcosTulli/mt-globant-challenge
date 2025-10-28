import type Product from "@/models/domain/product"
import React from "react";
import { useGetProducts } from "./useGetProducts";

function useFilteredProducts() {
  const [filterQuery, setFilterQuery] = React.useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = React.useState<string>('');
  const { products, isLoading } = useGetProducts();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(filterQuery);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [filterQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  }

  const filteredProducts: Product[] = React.useMemo(() => {
    if (!products) return [];

    if (!debouncedQuery.trim()) {
      return products;
    }

    const query = debouncedQuery.toLowerCase();
    return products.filter((product) =>
      product.title().toLowerCase().includes(query) ||
      product.category().toLowerCase().includes(query)
    );
  }, [products, debouncedQuery]);

  return { filteredProducts, handleChange, isLoading }
}

export default useFilteredProducts
