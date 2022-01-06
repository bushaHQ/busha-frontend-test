import { useEffect, useState } from "react";

export const useWallet = (): {
  isLoading: boolean;
  wallets: WalletType[];
  err: boolean;
  getWallets: () => void;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [err, setErr] = useState(false);

  const getWallets = () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const res: any = await fetch("/wallets");
        const response = await res.json();
        setWallets(response);
        setIsLoading(false);
      } catch (error) {
        setErr(true);
      }
    }, 2000);
  };
  useEffect(() => {
    getWallets();
  }, []);
  return {
    isLoading,
    wallets,
    err,
    getWallets,
  };
};
