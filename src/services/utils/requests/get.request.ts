import axios from 'axios';
import type { GetRequestParams } from '@models';

export async function getRequest<T>({ url, params, headers }: GetRequestParams): Promise<T> {
  const response = await axios.get(url, {
    params,
    headers,
    paramsSerializer: {
      encode: (params) => params,
    },
  });
  return response.data;
}
