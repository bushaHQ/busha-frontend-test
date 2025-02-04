import React, { useState } from 'react';
import { Wallet } from '../types';
import Modal from '../../shared/Modal';
import Loader from '../../shared/Loader';
import { StyledModalContent, ErrorToast, ModalCenteredContainer, Button } from '../styles';

interface AddWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: Wallet[];
  onCreateAccount: (currency: string) => Promise<void>;
  loadingWallets: boolean;
  errorWallets: boolean;
  onRetryWallets: () => void;
}

export const AddWalletModal: React.FC<AddWalletModalProps> = ({
  isOpen,
  onClose,
  wallets,
  onCreateAccount,
  loadingWallets,
  errorWallets,
  onRetryWallets,
}) => {
  const [selectedWallet, setSelectedWallet] = useState("");
  const [loadingAccountsCreation, setLoadingAccountsCreation] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const handleCreateAccount = async () => {
    if (!selectedWallet) return;
    
    setLoadingAccountsCreation(true);
    try {
      await onCreateAccount(selectedWallet);
      onClose();
    } catch (err) {
      setNetworkError(true);
    } finally {
      setLoadingAccountsCreation(false);
    }
  };

  if (loadingWallets || errorWallets) {
    return (
      <Modal isOpen={isOpen}>
        <StyledModalContent>
          <h2>
            <img
              src="/assets/images/close.svg"
              onClick={onClose}
              aria-label="Close button"
            />
          </h2>
          <ModalCenteredContainer>
            {loadingWallets ? (
              <Loader size={100} width={4} />
            ) : (
              <div className="modal">
                <img src="/assets/images/error.svg" />
                <br />
                Network error
                <br />
                <br />
                <Button onClick={onRetryWallets}>Try Again</Button>
              </div>
            )}
          </ModalCenteredContainer>
        </StyledModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen}>
      <StyledModalContent>
        <h2>
          Add new wallet
          <img
            src="/assets/images/close.svg"
            onClick={onClose}
            aria-label="Close button"
          />
        </h2>
        <p>
          The crypto account will be created instantly and be available in
          your list of accounts.
        </p>
        <label>Select Wallet</label>
        <br />
        <select
          value={selectedWallet}
          onChange={(e) => setSelectedWallet(e.target.value)}
        >
          <option value="">Select wallet</option>
          {wallets.map((wallet) => (
            <option key={wallet.currency} value={wallet.currency}>
              {wallet.name}
            </option>
          ))}
        </select>

        <div className="button-wrapper">
          <Button onClick={handleCreateAccount} disabled={!selectedWallet}>
            {loadingAccountsCreation ? <Loader /> : 'Create Wallet'}
          </Button>
        </div>

        {networkError && (
          <ErrorToast>
            <span>
              <img src="/assets/images/error-icon.svg" alt="Error" />
              &nbsp;&nbsp;Network Error
            </span>
            <button onClick={() => setNetworkError(false)} className="close-btn">
              <img src="/assets/images/close-red.svg" alt="Close" />
            </button>
          </ErrorToast>
        )}
      </StyledModalContent>
    </Modal>
  );
};