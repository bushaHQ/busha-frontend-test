import { accounts } from "../utils/apiRoutes";
import useFetch from "./useFetch";

;

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
