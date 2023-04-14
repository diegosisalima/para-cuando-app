import axios from 'axios';
import useSWR from 'swr';
import { PublicationsResponse } from '../interfaces/publications.interfaces';

function usePublications() {
  const { data, isValidating, error, mutate } =
    useSWR<PublicationsResponse>('/publications');

  return {
    data: data?.results,
    isValidating,
    error,
    mutate,
  };
  // const {data, error, isLoading, mutate} = useSWR(
  // params ? '/publications?${params}' : '/publication'
  // );
  // return {
  // data,
  // error,
  // isLoading,
  // mutate,
  // };
}
function createPublication(data: string) {
  return axios.post(
    'https://paracuando-academlo-api.academlo.tech/api/v1',
    data
  );
}
// function getPublications(){
// return axios.get(
//'https://paracuando-academlo-api.academlo.tech/api/v1/publications'
// );
// }

export { usePublications, createPublication };
