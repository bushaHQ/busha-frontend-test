import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { WalletSaveType, WalletType, PromiseFunction, AccountType } from '../types';
import { useMount } from '../hooks/useMount';

export const WalletsContext = createContext({ 
    wallets: { data: [] as WalletType[], loading: false, error: '', refetch: () => {}, saveWallet: (wallet: WalletSaveType, onSuccess: (data: AccountType) => void) => PromiseFunction },
    wallet: { error: '', setError: (err: string) => {}, clearError: () => {} }
});

export const WalletsContextProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<WalletType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [createError, setCreateError] = useState('');
    const isMounted = useMount();

    const fetchWallets = useCallback(async () => {
        try {
            setLoading(true)
            setError('')
            const wallets = await fetch(`${process.env.REACT_APP_BASE_URL}/wallets`, {
                method: 'GET'
            })

            if (isMounted) {
                const data = await wallets.json()
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
        fetchWallets()
    }, [fetchWallets])


    const saveWallet = async (wallet: WalletSaveType, onSuccess: (data: AccountType) => void) => {
        try {
            setCreateError('')
            const created = await fetch(`${process.env.REACT_APP_BASE_URL}/accounts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(wallet)
            })

            if (created.ok) {
                const data = await created.json()
                setCreateError('')
                onSuccess(data)
            } else {
                setCreateError('Network Error')
            }
        } catch (error) {
            setCreateError('Network Error')
        }
    }

    const clearError = () => {
        setCreateError('');
    }

    return (
      <WalletsContext.Provider value={{ wallets: { data, loading, error, refetch: fetchWallets, saveWallet }, wallet: { error: createError, setError: setCreateError, clearError }}}>
        {children}
      </WalletsContext.Provider>
    );
  };
