import { useState, useEffect } from 'react'
import { AccountResponse } from '../helpers/types';

export type ApiResponse = {
    status: Number;
    statusText: String;
    data: AccountResponse[];
    getData: () => Promise<void>;
    error: any;
    loading: Boolean;
};

export const useAccounts = (): ApiResponse => {
    const url = 'http://localhost:3090/accounts';
    // const baseURL = process.env.REACT_APP_BASEURL;
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<AccountResponse[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async () => {
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
        getData()
    }, [])

    return { status, statusText, data: data as AccountResponse[], error, loading, getData};
}