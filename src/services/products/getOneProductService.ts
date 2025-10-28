import type { ProductDTO } from "@models/domain/product/productDTO";
import { HttpClientInstance } from "../utils/httpclient";
import Product from "@models/domain/product";
import { appEnv } from "@config/env";

export const getOneProductService = async ({productId}: {productId: string | undefined}): Promise<Product> => {
  const data = await HttpClientInstance.get<ProductDTO>({
    url: `${appEnv.productsAPI}/${productId}`,
  });

  return Product.FromJSON(data);
};
