import { useState, useEffect } from "react";
import { walletsDetail, ApiState } from "../types";
import { getData } from "../utils";

export default function useWallets() {
  const [apiState, setApiState] = useState(ApiState.Idle);
  const [walletsData, setWalletData] = useState<walletsDetail[]>([]);
  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    // 👇️ set isMounted to true
    let isMounted = true;
    setApiState(ApiState.Loading);

    getData("wallets")
      .then((walletsDetails: walletsDetail[]) => {
        if (isMounted) {
          setWalletData(walletsDetails);
          setApiState(ApiState.Success);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(error);
          setApiState(ApiState.Error);
        }
      });

    return () => {
      // 👇️ when component unmounts, set isMounted to false
      isMounted = false;
    };
  }, [shouldRefetch]);
  return [apiState, walletsData, refetch] as const;
}
