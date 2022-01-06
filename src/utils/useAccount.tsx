import { useEffect, useState } from "react";

export const useAccount = (loadAccount: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState<AcountType[]>([]);
  const [err, setErr] = useState(false);

  const getAccounts = async () => {
    setIsLoading(true);
    setErr(false);
    try {
      const res: any = await fetch("http://localhost:3090/accounts");
      const response = await res.json();
      setAccounts(response);
      setIsLoading(false);
    } catch (error) {
      setErr(true);
      setIsLoading(false);
    }
  };
  const addAccount = async (data: any, cb: any) => {
    setIsLoading(true);
    try {
      const res: any = await fetch("http://localhost:3090/accounts", {
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
  useEffect(() => {
    loadAccount && getAccounts();
    return () => {
      setAccounts([]);
      setErr(false);
      setIsLoading(false);
    };
  }, [loadAccount]);
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
