import type { GetRequestParams } from '@models';
import { getRequest } from './requests/get.request';

class HttpClient {
  private jsonHeaders: Record<string, string> = {
    'Content-Type': 'application/json;charset=UTF-8',
  };

  private buildHeaders(customHeaders?: Record<string, string>) {
    return {
      ...this.jsonHeaders,
      ...(customHeaders || {}),
    } as Record<string, string>;
  }

  public async get<T>(params: GetRequestParams): Promise<T> {
    const headers = this.buildHeaders(params.headers);
    return getRequest<T>({
      ...params,
      headers,
    });
  }

}

export const HttpClientInstance = new HttpClient();
