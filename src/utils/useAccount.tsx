import { useEffect, useState } from "react";
import { baseUrl } from "./helper";

// this hooks handles all logics about account
export const useAccount = (loadAccount: boolean): AccountHookType => {
  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState<AcountType[]>([]);
  const [err, setErr] = useState(false);

  // get list of accounts
  const getAccounts = async () => {
    setIsLoading(true);
    setErr(false);
    try {
      const res: Response = await fetch(`${baseUrl}/accounts`);
      const response = await res.json();
      setAccounts(response);
      setIsLoading(false);
    } catch (error) {
      setErr(true);
      setIsLoading(false);
    }
  };

  // add account to list of accounts
  const addAccount = async (data: any, cb: any) => {
    setIsLoading(true);
    try {
      const res: Response = await fetch(`${baseUrl}/accounts`, {
        method: "POST",

        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      if (response) {
        cb(response);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErr(true);
    }
  };

  // fetch accounts on page load
  useEffect(() => {
    loadAccount && getAccounts();
    return () => {
      setAccounts([]);
      setErr(false);
      setIsLoading(false);
    };
  }, [loadAccount]);

  // these object can be reused in any components
  return {
    isLoading,
    accounts,
    err,
    getAccounts,
    addAccount,
    setAccounts,
    setErr,
  };
};
