import { getOneProductService } from '@/services/products/getOneProductService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export function useGetProduct() {
  const { productId } = useParams<{ productId?: string }>();

  const isValidId = !!productId; 

  const { data, isLoading, } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getOneProductService({ productId: productId! }),
    enabled: isValidId, 
  });

  return { product: data, isLoading  };
}
