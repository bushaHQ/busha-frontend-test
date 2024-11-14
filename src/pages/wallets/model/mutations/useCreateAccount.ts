import { accounts } from "../../../../utils/api-routes";
import usePost from "../../../../utils/usePost";

function useCreateAccount(onSuccess?: (res?: any) => void) {
  const { loading, error, mutate: createWallet } = usePost<any[]>(accounts, onSuccess);

  return {
    createWallet,
    loading,
    error,
  };
}

export default useCreateAccount;
