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
    deposit: boolean;
    payout: boolean;
};

type WalletCardProps = {
    account: Account;
    onClick: (account: Account) => void;
};

const WalletCard: React.FC<WalletCardProps> = ({ account, onClick }) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.onerror = null;
        let fallbackSrc = '';
        switch (account.name.toLowerCase()) {
            case 'naira':
                fallbackSrc = '/naira.svg';
                break;
            case 'bitcoin':
                fallbackSrc = '/bitcoin.svg';
                break;
            case 'ethereum':
                fallbackSrc = '/ethereum.svg';
                break;
            case 'stellar':
                fallbackSrc = '/stellar.svg';
                break;
            case 'ripple':
                fallbackSrc = '/ripple.svg';
                break;
            case 'tron':
                fallbackSrc = '/tron.svg';
                break;
            case 'tether':
                fallbackSrc = '/usdt.svg';
                break;
            case 'litecoin':
                fallbackSrc = '/litecoin.svg';
                break;
            case 'sureremit':
                fallbackSrc = '/usdc.svg';
                break;
            case 'dogecoin':
                fallbackSrc = '/dogecoin.svg';
                break;

            default:
                break;
        }
        if (fallbackSrc) {
            event.currentTarget.src = fallbackSrc;
        }
    };

    const formattedBalance =
        account.currency === 'NGN'
            ? parseFloat(account.balance).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
              })
            : account.balance;

    return (
        <div className="wallet-card" onClick={() => onClick(account)}>
            <div className="wallet-content">
                <div className="coin-symbol-container">
                    <img src={account.imgURL} alt={account.name} onError={handleImageError} />
                </div>
                <span className="wallet-name">{account.name}</span>
                <span className="wallet-balance">{account.currency === 'NGN' ? `₦${formattedBalance}` : `${formattedBalance} ${account.currency}`}</span>
                <div className="chevron-container">
                    <img src="/caret.svg" alt="details" className="chevron-icon" />
                </div>
            </div>
        </div>
    );
};

export default WalletCard;
