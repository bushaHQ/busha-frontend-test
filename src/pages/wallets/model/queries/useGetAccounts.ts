import { accounts } from "../../../../utils/api-routes";
import useFetch from "../../../../utils/useFetch";

function useGetAccounts() {
  const { data, loading, error, refetch } = useFetch<any[]>(accounts);

  return {
    data,
    loading,
    error,
    refetch,
  };
}

export default useGetAccounts;
