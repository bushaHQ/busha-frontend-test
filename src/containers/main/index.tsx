/** @format */

import { useEffect, useState } from "react";
import TryAgain from "components/custom/tryAgain";
import Loader from "components/shared/Loader";
import {
  Divisor,
  FeedBackDiv,
  FlexBtw,
  MainWrapper,
  WalletsWrapper,
} from "./main.styles";
import Card from "components/custom/card";
import Modal from "components/shared/Modal";
import AddWallet from "containers/addWallet";

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown | null>(null);
  const [accounts, setAccounts] = useState<Record<any, any>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [reload, setReload] = useState(false);

  const tryAgainHanldler = () => {
    setTryAgain(!tryAgain);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    console.log("good");
    fetch(`${process.env.REACT_APP_API_URL}/accounts`)
      .then((response) => {
        if (!response.ok) setError(new Error("Bad response"));
        return response.json();
      })
      .then((data: any) => {
        setAccounts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

    return () => {
      setAccounts([]);
      setError(null);
      setIsLoading(false);
    };
  }, [tryAgain, reload]);

  return (
    <MainWrapper>
      <FlexBtw>
        <h1>Wallets</h1>
        <p onClick={() => setIsOpen(true)}>+ Add new wallet</p>
      </FlexBtw>
      <Divisor />
      <WalletsWrapper>
        {accounts?.length
          ? accounts?.map((item: any) => <Card key={item?.id} item={item} />)
          : null}
      </WalletsWrapper>
      <FeedBackDiv>
        {isLoading ? <Loader size={83.37} width={8} /> : null}
        {error ? <TryAgain retryFunction={tryAgainHanldler} /> : null}
      </FeedBackDiv>
      <Modal isOpen={isOpen}>
        <AddWallet
          close={setIsOpen}
          modalStatus={isOpen}
          reloader={setReload}
          reloadStatus={reload}
        />
      </Modal>
    </MainWrapper>
  );
};

export default Main;
