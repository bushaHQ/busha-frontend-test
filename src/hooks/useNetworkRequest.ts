import { useState } from "react";
import { IAccount, IWallet, NetworkRequestProp } from "../typings";

export const useNetworkRequest = ({
  path = "/",
  method,
  dataObj,
  headers = { "Content-Type": "Application/json" },
}: NetworkRequestProp) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IWallet[] | IAccount[]>();

  const fetchData = async function () {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method,
        headers,
        body: dataObj,
      });
      if (!res.ok || (res.status >= 400 && res.status < 600)) {
        throw new Error("An Error occured");
      }
      if (res.ok) {
        const response = await res.json();
        setError(false);
        setData(response);
        setIsLoading(false);
        return { isLoading: false, error: false, data: response, fetchData };
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      return { isLoading: false, error: true, data: null, fetchData };
    }
  };
  return { isLoading, error, data, fetchData };
};
