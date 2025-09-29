import React, { useState } from 'react';
import WalletCard from './WalletCard';
import StatusContainer from '../shared/StatusContainer';
import Modal from '../shared/Modal';
import WalletDetail from './WalletDetail';
import { useAccounts, Account } from '../../hooks/useAccounts';

const AccountList = () => {
  const { data: accounts, isLoading, error, refetch } = useAccounts();
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  const handleCardClick = (account: Account) => {
    setSelectedAccount(account);
    setDetailModalOpen(true);
  };

  return (
    <>
      <StatusContainer loading={isLoading} error={error as string | null} onRetry={refetch}>
        <div className="wallet-cards">
          {accounts?.map((account) => (
            <WalletCard key={account.id} account={account} onClick={handleCardClick} />
          ))}
        </div>
      </StatusContainer>
      <Modal isOpen={isDetailModalOpen}>
        {selectedAccount && <WalletDetail account={selectedAccount} onClose={() => setDetailModalOpen(false)} />}
      </Modal>
    </>
  );
};

export default AccountList;
