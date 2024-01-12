import ReactDOM from "react-dom";
import * as React from "react";
import "./Modal.scss";
import styled from "styled-components";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import NetworkError from "./NetworkError";
import ModalData from "./ModalData";

interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

interface IData {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleCloseModal }) => {
  const [data, setData] = useState<IData[]>([]);
  const [loader, setLoader] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
   handleClick()
  }, []);

  const handleClick = async () => {
    const dbs = await fetch("http://localhost:3090/wallets");
    if (dbs.status === 200) {
      const res = await dbs.json();
      setData(res);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setLoader(false);
  };

  const el = React.useRef(document.createElement("div"));
  const modalRoot = document.getElementById("modal-root");

  React.useEffect(() => {
    const _el = el.current;
    modalRoot?.appendChild(_el);

    return () => {
      modalRoot?.removeChild(_el);
    };
  }, [modalRoot]);

  if (!isOpen) return null;

  const modal = (
    <ModalContainer data-testid="modal">
      <ModalContent>
        <div className="container">
          {loader ? (
            <Loader />
          ) : !success ? (
            <NetworkError handleClick={handleClick} />
          ) : (
            <ModalData handleClose={handleCloseModal} data={data} />
          )}
        </div>
      </ModalContent>
    </ModalContainer>
  );

  return ReactDOM.createPortal(modal, el.current);
};

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

export default Modal;
