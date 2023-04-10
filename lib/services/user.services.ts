/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';
import { UserMeResponses } from '../interfaces/userMe.interface';

function useUserMe() {
  const { data, error, isLoading, mutate } =
    useSWR<UserMeResponses>('/auth/me');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
export { useUserMe };
