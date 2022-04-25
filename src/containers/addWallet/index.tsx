/** @format */

import { useState, useEffect, Dispatch, SetStateAction, Fragment } from "react";
import TryAgain from "components/custom/tryAgain";
import Loader from "components/shared/Loader";
import { FeedBackDiv } from "containers/main/main.styles";
import {
  ContentWrapper,
  FormWrapper,
  TextBlock,
  TopRight,
  Submit,
  SubmitWrapper,
  MainSelect,
  SelectWrapper,
} from "./addWallets.styles";
import { CloseIcon } from "assets/svgs";
import Alert from "components/custom/alert";

interface IAddWallet {
  close: Dispatch<SetStateAction<boolean>>;
  modalStatus: boolean;
  reloadStatus: boolean;
  reloader: Dispatch<SetStateAction<boolean>>;
}
const AddWallet = ({
  close,
  modalStatus,
  reloader,
  reloadStatus,
}: IAddWallet) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown | null>(null);
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [wallets, setWallets] = useState<Record<any, any>>([]);
  const [option, selectOption] = useState<string | undefined>("");

  const closeModal = () => {
    close(false);
  };

  function createWallet(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/accounts`, {
      method: "POST",
      body: JSON.stringify({
        currency: option,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          setNetworkError(true);
          return new Error("Bad Status");
        } else {
          closeModal();
          setIsLoading(false);
          reloader(!reloadStatus);
          return response.json();
        }
      })
      .catch((err) => {
        setNetworkError(true);
        setIsLoading(false);
      });
  }

  function fetchWallets() {
    setIsLoading(true);
    setError(null);
    fetch(`${process.env.REACT_APP_API_URL}/wallets`)
      .then((response) => {
        if (!response.ok) setError(new Error("Bad response"));
        return response.json();
      })
      .then((data: any) => {
        setWallets(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchWallets();
    return () => {
      setWallets([]);
      setError(null);
      setIsLoading(false);
    };
  }, [modalStatus]);

  return (
    <div>
      <ContentWrapper>
        <FeedBackDiv top="50">
          {isLoading ? <Loader size={83.37} width={8} /> : null}
          {error ? <TryAgain retryFunction={fetchWallets} /> : null}
        </FeedBackDiv>
        {!isLoading && !error && (
          <Fragment>
            <TopRight onClick={() => closeModal()}>
              <CloseIcon />
            </TopRight>
            <TextBlock>
              <h2>Add new wallet</h2>
              <p>
                The crypto wallet will be created instantly and be available in
                your list of wallets.
              </p>
            </TextBlock>

            <FormWrapper onSubmit={createWallet}>
              <b>
                <label htmlFor="wallet">Select Wallet</label>
              </b>
              <SelectWrapper>
                <MainSelect
                  name="wallet"
                  value={option}
                  onChange={(e) => selectOption(e.target.value)}
                >
                  {wallets.length &&
                    wallets.map((item: any) => (
                      <option key={item?.name} value={item?.currency}>
                        {item?.name}
                      </option>
                    ))}
                </MainSelect>
              </SelectWrapper>

              <SubmitWrapper>
                <Submit type="submit">Create wallet</Submit>
              </SubmitWrapper>
              {networkError ? <Alert hide={setNetworkError} /> : null}
            </FormWrapper>
          </Fragment>
        )}
      </ContentWrapper>
    </div>
  );
};

export default AddWallet;
