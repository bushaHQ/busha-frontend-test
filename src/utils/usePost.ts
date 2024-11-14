import { useState, useCallback } from 'react';

type UsePostResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  mutate: (postData: object) => void;
};

function usePost<T>(url: string, onSuccess?: (data: T) => void): UsePostResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendDataToServer = useCallback(async (postData: object) => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        signal: controller.signal,
      });

      if (!response.ok) {
        if (response.status === 500) {
          setError('Network error');
          throw new Error('Network error');
        }
        setError(`Error: ${response.statusText}`)
        throw new Error(`Error: ${response.status}`);
      }

      const result: T = await response.json();
      setData(result);

      if (onSuccess) onSuccess(result);
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  }, [url, onSuccess]);

  return { data, loading, error, mutate: sendDataToServer };
}

export default usePost;
