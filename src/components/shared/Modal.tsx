import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import ModalError from "../ModalError"
import Loader from './Loader'
import PostError from "../PostError";

const URL = `${window.location.protocol}//${window.location.hostname}:3090/wallets`;
const AccountsURL = `${window.location.protocol}//${window.location.hostname}:3090/accounts`;

export interface ModalProps {
  isOpen: boolean;
  toggleModal?: () => void;
  getData?: () => void;
}
export default function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { isOpen, toggleModal, getData } = props;
  const [isCurrency, setIsCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCurrency, SetSelectedCurrency] = useState("");
  const [walletError, setWalletError] = useState(false);
  const [postError, setPostError] = useState(false);

  const el = React.useRef(document.createElement("div"));
  const modalRoot = document.getElementById("modal-root");

  React.useEffect(() => {
    const _el = el.current;
    modalRoot?.appendChild(_el);

    return () => {
      modalRoot?.removeChild(_el);
    };
  }, [modalRoot]);

  useEffect(() => {
    getCurrency();
  }, []);

    const getCurrency = () => {
    fetch(URL, {
      method: 'GET'
    }).then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setIsCurrency(data);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
      setWalletError(true);
    })
  }

  if (!isOpen) return null;

  const createWallet = (e: any) => {
    e.preventDefault();
    fetch(AccountsURL, {
      body: JSON.stringify({"currency": selectedCurrency}),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },

    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      getData && getData();
    }).catch((error) => {
      console.log(error);
      setPostError(true);
    })
  }

  const retry = () => {
    setIsLoading(true);
    setError(false);
    getCurrency();
  }
  
  
  if(error) {
    return(
      <ModalError onClick={retry} />
    )
  }



  const modal = (
    <ModalContainer data-testid="modal">
      <ModalContent>
        {
                isLoading ? 
                (<div className="modal-loader"><Loader /></div>):
                (walletError? <ModalError onClick={retry} /> :
                  (
                  <div className="form-container">
                    <div className="modal-heading">
                      <p>Add new wallet</p>
                      <p onClick={toggleModal} className="close-btn">X</p>
                    </div>
                    <p className="crypto-text">The crypto wallet will be created instantly and be available in your list of wallets.</p>
                    <form>
                      <p className="select-text">Select wallet</p>
                        <select onChange={(e) => SetSelectedCurrency(e.target.value)}>
                          { 
                            isCurrency?.map((currency: any) => (
                                  <option key={currency.id}>{currency.currency}</option>
                            ))

                        }
                      </select> 
                      <button className="create-btn" onClick={createWallet}>Create wallet</button>
                    </form>
                    {
                      postError && <PostError />
                    }
                  </div>  
                ))
                
              }
      
      </ModalContent>
      
    </ModalContainer>
  );

  return ReactDOM.createPortal(modal, el.current);
}






const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 440px;
  height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  overflow-y: auto;
`;
