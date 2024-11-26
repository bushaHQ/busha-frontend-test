import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './shared/Loader';
import NetworkError from './shared/Error';
import DismissibleError from './shared/DismissableError';
const url = process.env.REACT_APP_FETCH_URL;

const Wrapper = styled.div`
  max-width: 400px;
  padding: 1rem;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 40px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 19px;
  line-height: 32px;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const CloseIcon = styled.span`
  font-family: 'Material Symbols Outlined';
`;

const Description = styled.p`
  text-align: left;
  margin-bottom: 1.5rem;
  font-size: 14px;
  color: #3E4C59;
  line-height: 26px;
  margin-top: 40px;
`;

const SectionTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.5rem;
  color: #3E4C59;

`;

const Dropdown = styled.select`
  width: 100%;
  height: 64px;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #cbd2d9;
  border-radius: 6px;
  appearance: none;
  background: url("./images/dropdown-icon.png")
    no-repeat right 18px center;
  background-size: 14px 10px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const DropdownOption = styled.option`
  font-size: 14px;
`;

const Error = styled.div`
  color: red;
  text-align: center;
  margin: 2rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const CreateWalletButton = styled.button`
  display: block;
  background-color: #000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  width: 222px;
  height: 54px;
  margin: 0 auto;
  margin-top: 20px;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #333;
  }
`;

const CenterLoader = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 400px;
  height: 100vh;
`;

interface Wallet {
  type: string;
  name: string;
  currency: string;
  imgURL: string;
}

interface walletInterface {
  name: string;
  currency: string;
}

interface AddAccountProps {
  onClose: () => void;
  addWallet?: (data: walletInterface) => void;
}

const AddAccount: React.FC<AddAccountProps> = ({ onClose, addWallet }) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets = async (): Promise<void> => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`${url}/wallets`);
      if (!response.ok) {
        setError(true);
        return;
      }
      const data: Wallet[] = await response.json();
      setWallets(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWallet(e.target.value);
  };

  const createWallet = async () => {
    if (!selectedWallet) {
      setPostError('Please select a wallet.');
      return;
    }

    setIsPosting(true);
    setPostError(null);

    try {
      const response = await fetch(`${url}/accounts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currency: selectedWallet }),
      });

      if (!response.ok) {
        setIsPosting(false);
        setPostError('Network Error.');
        return;
      }

      const data = {
        name: wallets.find((wal) => wal.currency === selectedWallet)?.name,
        currency: selectedWallet,
      } as walletInterface;
      addWallet?.(data);
      onClose();
    } catch (err) {
      setPostError('Network Error.');
    } finally {
      if (isPosting) {
        setIsPosting(false);
      }
    }
  };

  const handleRetry = () => {
    setLoading(true);
    setError(false);
    fetchWallets();
  };

  if (loading) {
    return (
      <CenterLoader>
        <Loader width={5} size={60} />
      </CenterLoader>
    );
  }

  if (error) {
    return (
      <Error>
        <NetworkError callApi={handleRetry} />
      </Error>
    );
  }

  return (
    <Wrapper>
      <Header>
        <Title>Add new wallet</Title>
        <CloseButton onClick={onClose} aria-labelledby="Close button">
          <CloseIcon className="material-symbols-outlined">close</CloseIcon>
        </CloseButton>
      </Header>

      <Description>
        The crypto wallet will be created instantly and be available in your list of wallets.
      </Description>

      <SectionTitle>Select wallet</SectionTitle>
      <Dropdown value={selectedWallet} onChange={handleWalletChange}>
        <DropdownOption value="" disabled>
          Select a wallet
        </DropdownOption>
        {wallets.length &&
          wallets.map((wallet) => (
            <DropdownOption key={wallet.imgURL} value={wallet.currency}>
              {wallet.currency}
            </DropdownOption>
          ))}
      </Dropdown>

      <CreateWalletButton onClick={createWallet} disabled={isPosting}>
        {isPosting ? 'Creating...' : 'Create wallet'}
      </CreateWalletButton>

      {postError && <DismissibleError message={postError} />}
    </Wrapper>
  );
};

export default AddAccount;
