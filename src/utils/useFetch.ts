import { useState, useEffect, useCallback } from 'react';

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<number>(0); // State for triggering refetch!

  const fetchData = useCallback(async (controller: AbortController) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, { signal: controller.signal });

      if (!response.ok) {
        if (response.status === 500) {
          setError("Network error");
          throw new Error("Network error");
        }
        setError(`Error: ${response.statusText}`)
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);

    return () => controller.abort(); // Cleanup
  }, [fetchData, trigger]);

  const refetch = () => setTrigger(prev => prev + 1);

  return { data, loading, error, refetch };
}

export default useFetch;
