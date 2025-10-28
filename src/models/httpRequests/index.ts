interface BaseRequestParams {
  url: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export type GetRequestParams = BaseRequestParams;
