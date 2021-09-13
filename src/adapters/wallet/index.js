import { fetchApi } from "../util/fetchApi";

export const apiUrl = "http://localhost:3090";

export const getAccounts = async (
  setAccountsList,
  setIsError,
  setIsFetching
) => {
  setIsFetching(true);
  const APIUrl = `${apiUrl}/accounts`;

  const requestHeaders = {
    "Content-Type": "application/json",
  };

  const getResponse = async () => {
    const { isError, data, errorMessage } = await fetchApi(
      {},
      "GET",
      APIUrl,
      requestHeaders
    );

    if (isError) {
      setIsError(true);
      setIsFetching(false);
      return { errorMessage, isError };
    }

    setIsFetching(false);
    setAccountsList(data);
    return { data: data };
  };

  const response = await getResponse();
  return response;
};

export const getWallets = async (setWalletsList, setIsError, setIsFetching) => {
  setIsFetching(true);
  const APIUrl = `${apiUrl}/wallets`;

  const requestHeaders = {
    "Content-Type": "application/json",
  };

  const getResponse = async () => {
    const { isError, data, errorMessage } = await fetchApi(
      {},
      "GET",
      APIUrl,
      requestHeaders
    );

    if (isError) {
      setIsError(true);
      setIsFetching(false);
      return { errorMessage, isError };
    }

    setIsFetching(false);
    setWalletsList(data);
    return { data: data };
  };

  const response = await getResponse();
  return response;
};

export const createWallet = async (
  param,
  setIsError,
  setIsLoading,
  handleClose,
  handleAddAccount
) => {
  setIsLoading(true);
  const APIUrl = `${apiUrl}/accounts`;

  const requestHeaders = {
    "Content-Type": "application/json",
  };

  const getResponse = async () => {
    const { isError, data, errorMessage } = await fetchApi(
      param,
      "POST",
      APIUrl,
      requestHeaders
    );

    if (isError) {
      setIsError(true);
      setIsLoading(false);
      return { errorMessage, isError };
    }

    handleAddAccount(data);
    handleClose();
    setIsLoading(false);
    return { data: data };
  };

  const response = await getResponse();
  return response;
};
