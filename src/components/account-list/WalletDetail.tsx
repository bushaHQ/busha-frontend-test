import React from 'react';

type Account = {
  id: string;
  currency: string;
  balance: string;
  name: string;
  imgURL: string;
  hold: string;
  pending_balance: string;
  type: string;
};

type WalletDetailProps = {
  account: Account;
  onClose: () => void;
};

const WalletDetail: React.FC<WalletDetailProps> = ({ account, onClose }) => {
  const formattedBalance =
    account.currency === 'NGN'
      ? `₦${parseFloat(account.balance).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : `${account.balance} ${account.currency}`;

  const formattedHold =
    account.currency === 'NGN'
      ? `₦${parseFloat(account.hold).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : `${account.hold} ${account.currency}`;

  return (
    <div className="wallet-detail-modal">
      <div className="modal-header">
        <h3>{account.name}</h3>
        <button onClick={onClose} className="modal-close-btn">&times;</button>
      </div>
      <div className="wallet-detail-content">
        <div className="detail-row">
          <span className="detail-label">Balance:</span>
          <span className="detail-value">{formattedBalance}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Hold:</span>
          <span className="detail-value">{formattedHold}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Pending Balance:</span>
          <span className="detail-value">{account.pending_balance} {account.currency}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Type:</span>
          <span className="detail-value">{account.type}</span>
        </div>
      </div>
    </div>
  );
};

export default WalletDetail;
