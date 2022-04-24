import { useState, useEffect } from 'react'
import { WalletResponse } from '../helpers/types';

export type ApiResponse = {
    status: Number;
    statusText: String;
    data: WalletResponse[];
    getWalletOptions: () => Promise<void>;
    error: any;
    loading: Boolean;
};

export const useWallets = (): ApiResponse => {
    const url = 'http://localhost:3090/wallets';
    // const baseURL = process.env.REACT_APP_BASEURL;
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<WalletResponse[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getWalletOptions = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}`)
            const newData = await response.json()
            setStatus(response.status);
            setStatusText(response.statusText);
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

    return { status, statusText, data: data as WalletResponse[], error, loading, getWalletOptions };
}