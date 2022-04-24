import { useState, useEffect } from 'react'
import { AccountResponse } from '../helpers/types';

export type ApiResponse = {
    data: AccountResponse[];
    getData: () => Promise<void>;
    error: any;
    loading: Boolean;
};

export const useAccounts = (): ApiResponse => {
    // const baseURL = process.env.REACT_APP_BASEURL;
    const [data, setData] = useState<AccountResponse[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3090/accounts')
            const newData = await response.json()
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

    return { data: data as AccountResponse[], error, loading, getData};
}