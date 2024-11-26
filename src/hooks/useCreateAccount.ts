import { accounts } from "../utils/apiRoutes";
import usePost from "./usePost";

function useCreateAccount(onSuccess?: (res?: any) => void) {
  const { loading, error, mutate: createWallet } = usePost<any[]>(accounts, onSuccess);

  return {
    createWallet,
    loading,
    error,
  };
}

export default useCreateAccount;
