import React from "react";
import CancelSvg from "../../../assets/icons/cancel.svg";
import Modal from "../../shared/Modal";
import Image from "../../shared/Image";
import Button from "../../shared/Button";
import Select from "../../shared/Select";
import { ToastError } from "../../shared/Error";
import { AddWalletWrapper } from "./AddWallet.style";

type AddWalletProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreateWallet: () => void;
};

export default function AddWallet({
  isOpen,
  onClose,
  onCreateWallet,
}: AddWalletProps) {
  const onRetry = () => {};

  return (
    <Modal isOpen={isOpen}>
      <AddWalletWrapper>
        <div className="add-w-heading">
          <h2>Add new wallet</h2>
          <button onClick={onClose}>
            <Image src={CancelSvg} alt="close" />
          </button>
        </div>
        <p className="add-w-description">
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </p>

        <form className="add-w-form">
          <Select label="Select wallet" />

          <div className="btn-container">
            <Button text="Create wallet" onClick={onCreateWallet} />
          </div>
        </form>

        <div className="error-render">
          <ToastError message="Network Error" onRetry={onRetry} />
        </div>
      </AddWalletWrapper>
    </Modal>
  );
}
