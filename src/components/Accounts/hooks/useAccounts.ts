import { useState, useEffect, useCallback } from 'react';
import { Account } from '../types';
import { BASE_URL } from '../../../config';
import { useMount } from '../../../hooks/useMount';

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isMounted = useMount();

  const fetchAccounts = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`${BASE_URL}/accounts`);
      const data = await response.json();
      
      if (isMounted.current) {
        setAccounts(data);
        setLoading(false);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(true);
        setLoading(false);
      }
    }
  }, [isMounted]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  return { accounts, setAccounts, loading, error, fetchAccounts };
};