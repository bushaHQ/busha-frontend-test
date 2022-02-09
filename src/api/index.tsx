import { useCallback, useEffect, useState } from "react";

export type ApiMethod = "GET" | "POST";

export type ApiState = "idle" | "loading" | "done" | "failed";

const fetcher = async (
    url: string,
    method: ApiMethod,
    payload?: string,
  ): Promise<any> => {
    const requestHeaders = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const res = await fetch(url, {
      body: payload ? JSON.stringify(payload) : undefined,
      headers: requestHeaders,
      method,
    });
    //const resobj = await res.json();
    return res;
  };

export function useApi(
  url: string,
  method: ApiMethod,
  payload?: any
): {
  apiState: ApiState;
  data: [];
  execute: () => void;
} {
  const [apiState, setApiState] = useState<ApiState>("idle");

  const [data, setData] = useState<[]>([]);
  const [toCallApi, setApiExecution] = useState(false);

  const execute = () => {
    console.log("executing api call");
    setApiExecution(true);
  };


  const fetchApi = useCallback(async () => {
    fetcher(url, method, payload)
    .then((res) => {
        if(!res.ok){
            return "error"
        }
        return res.json()
    })
    .then((result) => {
        if(result === "error") setApiState("failed")
        else{
            setData(result)
            setApiState("done")
        }
    })
  }, [method, payload, url]);

  // call api
  useEffect(() => {
    if (toCallApi &&  apiState === "idle") {
      console.log("calling api");
      setApiState("loading");
      fetchApi();
    }
  }, [apiState, fetchApi, toCallApi]);

  console.log(url,data, apiState, payload)   

  return {
    apiState,
    data,
    execute,
  };
}