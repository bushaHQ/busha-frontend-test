import { useState, useEffect } from 'react'
import { WalletResponse } from '../helpers/types';

export type ApiResponse = {
    data: WalletResponse[];
    getWalletOptions: () => Promise<void>;
    error: any;
    loading: Boolean;
};

export const useWallets = (): ApiResponse => {
    const [data, setData] = useState<WalletResponse[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getWalletOptions = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/wallets`)
            const newData = await response.json()
            setData(newData)

        } catch(error) {
            setError(error);
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getWalletOptions()
    }, [])

    return { data: data as WalletResponse[], error, loading, getWalletOptions };
}