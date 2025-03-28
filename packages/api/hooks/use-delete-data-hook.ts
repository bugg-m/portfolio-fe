import { useCallback, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { NotifyError, NotifySuccess } from '../../components/notify/notify';
import { ApiError } from '../utils/core-api-classes';
import { ApiService } from '../utils/core-api-utility';

function useDeleteDataHook<T>() {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const deleteData = useCallback(
    async ({
      url,
      config,
      notify = false,
    }: {
      url: string;
      config?: AxiosRequestConfig;
      notify?: boolean;
    }) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await ApiService.delete<T>({ url, config });

        if (result instanceof ApiError) {
          setError(result);
          setData(null);
          if (notify) {
            NotifyError(result.message);
          }
        } else {
          setData(result.data);
          setError(null);
          if (notify) {
            NotifySuccess(result.message);
          }
        }

        return result;
      } catch (err) {
        const apiError = new ApiError({
          statusCode: 500,
          message: err instanceof Error ? err.message : 'An unexpected error occurred',
          status: false,
        });
        setError(apiError);
        setData(null);
        NotifyError(apiError.message);
        return apiError;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { data, isLoading, error, deleteData };
}

export { useDeleteDataHook };
