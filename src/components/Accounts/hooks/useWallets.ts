import { useState, useCallback } from 'react';
import { Wallet } from '../types';
import { BASE_URL } from '../../../config';
import { useMount } from '../../../hooks/useMount';

export const useWallets = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [loadingWallets, setLoadingWallets] = useState(false);
  const [errorWallets, setErrorWallets] = useState(false);
  const isMounted = useMount();

  const fetchWallets = useCallback(async () => {
    setLoadingWallets(true);
    setErrorWallets(false);

    try {
      const response = await fetch(`${BASE_URL}/wallets`);
      const data = await response.json();
      
      if (isMounted.current) {
        setWallets(data);
      }
    } catch (err) {
      if (isMounted.current) {
        setErrorWallets(true);
      }
    } finally {
      if (isMounted.current) {
        setLoadingWallets(false);
      }
    }
  }, [isMounted]);

  return { wallets, loadingWallets, errorWallets, fetchWallets };
};
