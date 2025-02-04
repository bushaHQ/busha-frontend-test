import React from 'react';
import { Account } from '../types';
import { StyledAccountCard } from '../styles';

interface AccountCardProps {
  account: Account;
}

export const AccountCard: React.FC<AccountCardProps> = ({ account }) => (
  <StyledAccountCard>
    <div className="imgUrl">
      <img src={account.imgURL} alt={account.currency} className="image" />
      <div className="currency">{account.name}</div>
    </div>
    <div className="balance">
      <span>{account.balance}</span> <span>{account.currency}</span>
    </div>
    <button>
      <img src="/assets/images/forward.svg" alt="Forward" />
    </button>
  </StyledAccountCard>
);