import React, { useState } from 'react';
import { AccountCard } from './components/AccountCard';
import { AddWalletModal } from './components/AddWalletModal';
import { useAccounts } from './hooks/useAccounts';
import { useWallets } from './hooks/useWallets';
import { AccountsProps } from './types';
import {
  AccountsContainer,
  AccountHeader,
  AddButton,
  AccountCardContainer,
  CenteredContainer,
  Button
} from './styles';
import Loader from '../shared/Loader';
import Modal from '../shared/Modal';
import { BASE_URL } from '../../config';

export const Accounts: React.FC<AccountsProps> = ({ showToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { accounts, setAccounts, loading, error, fetchAccounts } = useAccounts();
  const { wallets, loadingWallets, errorWallets, fetchWallets } = useWallets();

  const createAccount = async (currency: string) => {
    const response = await fetch(`${BASE_URL}/accounts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currency }),
    });

    const data = await response.json();

    if (response.status === 422) {
      showToast(data.error, 'error');
      throw new Error(data.error);
    }

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    const selectedAccount = accounts.find(
      (account) => account.currency === currency
    );

    if(!selectedAccount){
      setAccounts((prev) => [...prev, data]);
    }
    showToast('Account created successfully!', 'success');
  };

  if (loading) {
    return (
      <AccountsContainer>
        <AccountHeader>
          <h1>Accounts</h1>
          <AddButton>Add New Wallet</AddButton>
        </AccountHeader>
        <CenteredContainer>
          <Loader size={100} width={4} />
        </CenteredContainer>
      </AccountsContainer>
    );
  }

  if (error) {
    return (
      <AccountsContainer>
        <AccountHeader>
          <h1>Accounts</h1>
          <AddButton>Add New Wallet</AddButton>
        </AccountHeader>
        <CenteredContainer>
          <div>
            <img src="/assets/images/error.svg" alt="Error" />
            <br />
            Network error
            <br />
            <br />
            <Button onClick={fetchAccounts}>Try Again</Button>
          </div>
        </CenteredContainer>
      </AccountsContainer>
    );
  }

  return (
    <>
      <AccountsContainer>
        <AccountHeader>
          <h1>Accounts</h1>
          <AddButton
            onClick={() => {
              setIsOpen(true);
              fetchWallets();
            }}
          >
            + Add new Wallet
          </AddButton>
        </AccountHeader>
        <AccountCardContainer>
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </AccountCardContainer>
      </AccountsContainer>

      <AddWalletModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        wallets={wallets}
        onCreateAccount={createAccount}
        loadingWallets={loadingWallets}
        errorWallets={errorWallets}
        onRetryWallets={fetchWallets}
      />
    </>
  );
};