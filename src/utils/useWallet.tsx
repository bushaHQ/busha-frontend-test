import { useEffect, useState } from "react";
import { baseUrl } from "./helper";

export const useWallet = (): WalletHookType => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [err, setErr] = useState(false);

  // get list of accounts
  const getWallets = async () => {
    setErr(false);
    setIsLoading(true);
    try {
      const res: Response = await fetch(`${baseUrl}/wallets`);
      const response = await res.json();
      setWallets(response);
      setIsLoading(false);
    } catch (error) {
      setErr(true);
      setIsLoading(false);
    }
  };

  // fetch wallets on page load
  useEffect(() => {
    getWallets();
    return () => {
      setIsLoading(false);
      setErr(false);
      setWallets([]);
    };
  }, []);

  // these object can be reused in any components
  return {
    isLoading,
    wallets,
    err,
    getWallets,
  };
};
