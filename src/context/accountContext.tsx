import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { AccountType } from '../types';
import { useMount } from '../hooks/useMount';

export const AccountsContext = createContext({ accounts: { data: [] as AccountType[], loading: false, error: '', refetch: () => {}, updateAccounts: (account: AccountType) => {}  }});

export const AccountsContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<AccountType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const isMounted = useMount();

    const fetchAccounts = useCallback(async () => {
        try {
            setLoading(true)
            setError('')
            const accounts = await fetch(`${process.env.REACT_APP_BASE_URL}/accounts`, {
                method: 'GET'
            })

            if (isMounted) {
                const data = await accounts.json()
                setLoading(false)
                setData(data)
            }
        } catch (error) {
            if (isMounted) {
                setLoading(false)
                setError('Network Error')
            }
        }
    }, [isMounted])

    useEffect(() => {
        fetchAccounts()
    }, [fetchAccounts])

    const updateAccounts = (account: AccountType) => {
        setData(prev => [account, ...prev])
    }
 
    return (
      <AccountsContext.Provider value={{ accounts: { data, loading, error, refetch: fetchAccounts, updateAccounts }}}>
        {children}
      </AccountsContext.Provider>
    );
  };