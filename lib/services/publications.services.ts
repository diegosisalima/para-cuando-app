import axios from 'axios';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function usePublications() {
  const { data, isValidating, error, mutate } = useSWR(
    '/publications/',
    fetcher
  );

  return {
    data,
    isValidating,
    error,
    mutate,
  };
}

function usePublicationsTypes() {
  const { data, error, isLoading, mutate } = useSWR(
    '/publications-types/',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: object) {
  return axios.post('/publications/', data);
}

export { usePublications, createPublication, usePublicationsTypes };
