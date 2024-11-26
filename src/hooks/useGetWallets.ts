import { getWallets } from "../utils/apiRoutes";
import useFetch from "./useFetch";


function useGetWallets() {
  const { data, loading, error, refetch } = useFetch<any[]>(getWallets);

  console.log(error)
  return {
    data,
    loading,
    error,
    refetch,
  };
}

export default useGetWallets;
