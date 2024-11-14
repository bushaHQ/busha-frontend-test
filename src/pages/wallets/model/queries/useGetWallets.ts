import { getWallets } from "../../../../utils/api-routes";
import useFetch from "../../../../utils/useFetch";

function useGetWallets() {
  const { data, loading, error, refetch } = useFetch<any[]>(getWallets);

  return {
    data,
    loading,
    error,
    refetch,
  };
}

export default useGetWallets;
