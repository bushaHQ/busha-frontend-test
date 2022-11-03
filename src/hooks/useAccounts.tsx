import { useState, useEffect } from "react";
import { AccountsDetail, ApiState } from "../types";
import { getData } from "../utils";

export default function useWallets() {
  const [apiState, setApiState] = useState(ApiState.Idle);
  const [accountsData, setAccountsData] = useState<AccountsDetail[]>([]);
  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    // 👇️ set isMounted to true
    let isMounted = true;
    setApiState(ApiState.Loading);

    getData("accounts")
      .then((accountsDetails: AccountsDetail[]) => {
        if (isMounted) {
          setAccountsData(accountsDetails);
          setApiState(ApiState.Success);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(error);
          setApiState(ApiState.Error);
        }
      });

    return () => {
      // 👇️ when component unmounts, set isMounted to false
      isMounted = false;
    };
  }, [shouldRefetch]);
  return [apiState, accountsData, refetch] as const;
}
