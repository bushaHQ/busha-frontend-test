interface FetchOptions {
  isMountedRef: React.MutableRefObject<boolean>;
  setIsLoading: (isLoading: boolean) => void;
  setData?: (data: any) => void;
  setHasError?: (hasError: boolean) => void;
  method: "GET" | "POST";
  url: string;
  body?: any;
  successfulAction?: any;
}

export const fetchData = async ({
  setIsLoading,
  setData,
  setHasError,
  method,
  url,
  isMountedRef,
  body = null,
  successfulAction,
}: FetchOptions) => {
  setIsLoading(true);

  try {
    const response = await fetch(`http://localhost:3090/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
      const result = await response.json();
      console.log("🚀 ~ result:", result);
      successfulAction?.();

      if (setData && isMountedRef.current) {
        setData(result);
      }
    } else {
      if (setHasError && isMountedRef.current) {
        setHasError(true);
      }
    }
  } catch (error) {
    console.error("Network error:", error);
    if (setHasError && isMountedRef.current) {
      setHasError(true);
    }
  } finally {
    if (isMountedRef.current) setIsLoading(false);
  }
};
