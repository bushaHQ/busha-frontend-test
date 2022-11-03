import { useState, useRef } from "react";
import styled from "styled-components";
import Modal from "../../shared/Modal";
import CloseIcon from "../../../assets/images/close.svg";
import WarningIcon from "../../../assets/images/warning-rhombus.svg";
import Loader from "../../shared/Loader";
import ErrorState from "../../shared/ErrorState";

import { ApiState, WalletModalProps } from "../../../types";
import { addWallet, generateKey } from "../../../utils";
import useWallets from "../../../hooks/useWallets";

export default function AddNewWalletModal(
  props: React.PropsWithChildren<WalletModalProps>
) {
  const { isOpen, setIsModalOpen, updateAccounts } = props;
  const [apiState, walletsData, refetch] = useWallets();
  const [newWalletApiState, setNewWalletApiState] = useState(ApiState.Idle);

  const selectRef = useRef<HTMLSelectElement>(null);

  const createNewWallet = async () => {
    if (selectRef.current !== null) {
      const payload = selectRef.current.value;
      setNewWalletApiState(ApiState.Loading);
      try {
        const response = await addWallet({
          currency: payload,
        });
        updateAccounts(response);
        setNewWalletApiState(ApiState.Success);
        setIsModalOpen(false);
      } catch (error) {
        console.log(error);
        setNewWalletApiState(ApiState.Error);
      }
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <h2>Add new wallet</h2>
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close button"
        >
          <img src={CloseIcon} alt="" />
        </button>
      </ModalHeader>
      {/* Loading State */}
      {(apiState === "loading" || newWalletApiState === "loading") && (
        <StateContainer>
          <Loader size={83.37} width={8} />
        </StateContainer>
      )}

      {/* Error State */}
      {apiState === "error" && (
        <StateContainer>
          <ErrorState refetch={refetch} />
        </StateContainer>
      )}

      {/* Success State */}
      {apiState === "success" && (
        <ModalDiv>
          <ModalBody>
            <p>
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </p>

            <NewWalletForm>
              <label htmlFor="new-wallet">Select wallet</label>
              <select id="new-wallet" name="wallet" ref={selectRef}>
                {walletsData.map((data) => (
                  <option
                    key={generateKey()}
                    role="button"
                    value={data.currency}
                  >
                    {data.name}
                  </option>
                ))}
              </select>

              <SubmitButton role="button" onClick={createNewWallet}>
                Create wallet
                {newWalletApiState === "loading" && (
                  <button style={{ width: 0, opacity: 0 }} id="submit-button">
                    <label htmlFor="submit-button">Loading...</label>
                  </button>
                )}
              </SubmitButton>
            </NewWalletForm>
            {newWalletApiState === "error" && (
              <CreateWalletError>
                <div>
                  <img src={WarningIcon} alt="" />
                  <span>Network Error</span>
                </div>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L6.41421 5L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L5 6.41421L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711C-0.0976318 9.31658 -0.0976318 8.68342 0.292893 8.29289L3.58579 5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L5 3.58579L8.29289 0.292893Z"
                    fill="#D72C0D"
                  />
                </svg>
              </CreateWalletError>
            )}
          </ModalBody>
        </ModalDiv>
      )}
    </Modal>
  );
}

// STYLES
const ModalDiv = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: calc(100% - 103px);
`;

const ModalHeader = styled.div`
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 74px;

  button {
    border: none;
    background: transparent;
    outline: none;
    margin-left: auto;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 0px 24px 15px;
  height: 100%;
  padding-top: 49px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #3e4c59;
  }
`;

const StateContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewWalletForm = styled.div`
  position: relative;
  margin-top: 43px;

  position: relative;

  &::after {
    position: absolute;
    top: 45px;
    right: 18px;
    content: "⌄";
    font-size: 25px;
    color: #616e7c;
  }

  select {
    position: relative;
    width: 100%;
    width: 100%;
    outline: none;
    border: 1px solid #cbd2d9;
    border-radius: 5px;
    height: 64px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    margin-top: 14px;
    cursor: pointer;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
      display: none;
    }
  }
`;

const SubmitButton = styled.div`
  margin: 0 auto;
  margin-top: 33px;
  height: 54px;
  padding: 0px 54px;
  border-radius: 40px;
  transition: background-color 300ms ease-in 0s;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid transparent;
`;

const CreateWalletError = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 45px;
  border-radius: 8px;
  border: 1px solid #e0b3b2;
  background: #fff4f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 14px;

    span {
      color: red;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .close-icon {
    color: red;
  }
`;
