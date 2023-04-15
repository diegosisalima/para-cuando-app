import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function useTags() {
  const { data, error, isLoading, mutate } = useSWR('/tags/', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useTags };
