import { getProductsService } from '@services/products/getProductsService';
import { useQuery } from '@tanstack/react-query';

export function useGetProducts() {

  const { data, isLoading } = useQuery({
    queryKey: ['products'], // TODO: Create Keys Map
    queryFn: () => getProductsService(),
    refetchOnWindowFocus: false,
  });

  return { products: data, isLoading };
}
