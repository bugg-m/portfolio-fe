import axios, { AxiosRequestConfig, Method } from 'axios';

import { ApiError, ApiResponse } from './core-api-classes';

async function request<T>(
  method: Method,
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<ApiResponse | ApiError> {
  try {
    const response = await axios({
      method,
      url,
      data,
      ...config,
      responseType: 'json',
      withCredentials: true,
    });

    return new ApiResponse({
      statusCode: response.status,
      message: response.data.message,
      data: response.data.data || response.data,
      status: response.status < 400,
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      let errorData = error.response?.data;

      if (errorData instanceof Blob) {
        try {
          errorData = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              try {
                resolve(JSON.parse(reader.result as string));
              } catch {
                reject(error);
              }
            };
            reader.onerror = () => reject(error);
            reader.readAsText(errorData);
          });
        } catch {
          errorData = { error: 'Unable to parse error response' };
        }
      }

      return new ApiError({
        statusCode: error.response?.status || 500,
        message:
          errorData?.error || errorData?.message || error.message || 'An unexpected error occurred',
        status: false,
        data: errorData || null,
        errors: errorData?.errors || [],
      });
    }

    return new ApiError({
      statusCode: 500,
      message: 'An unexpected error occurred',
      status: false,
    });
  }
}

const ApiService = {
  get: <T>({ url, config }: { url: string; config?: AxiosRequestConfig }) =>
    request<T>('GET', url, undefined, config),

  post: <T>({ url, data, config }: { url: string; data: T; config?: AxiosRequestConfig }) =>
    request<T>('POST', url, data, config),

  patch: <T>({ url, data, config }: { url: string; data: T; config?: AxiosRequestConfig }) =>
    request<T>('PATCH', url, data, config),

  delete: <T>({ url, config }: { url: string; config?: AxiosRequestConfig }) =>
    request<T>('DELETE', url, undefined, config),
};

export { ApiService };
