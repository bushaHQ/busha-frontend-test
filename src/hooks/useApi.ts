import { useState, useEffect } from 'react'

export type ApiResponse = {
    status: Number;
    statusText: String;
    data: any;
    error: any;
    loading: Boolean;
};

export const useApi = (url: string): ApiResponse => {
    const baseURL = 'http://localhost:3090';
    // const baseURL = process.env.REACT_APP_BASEURL;
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${baseURL}${url}`)
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
        getData()

    }, [baseURL, url])

    return { status, statusText, data, error, loading };
}