import type { ProductDTO } from '@/models/domain/product/productDTO';
import { appEnv } from '@/config/env';
import { HttpClientInstance } from '../utils/httpclient';
import Product from '@models/domain/product';

export const getProductsService = async () => {
  const response = await HttpClientInstance.get<ProductDTO[]>({
    url: appEnv.productsAPI,
  });

  const data = response.map((product)=> Product.FromJSON(product));

  return data;
};
