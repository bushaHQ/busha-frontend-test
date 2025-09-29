import React, { useState, useEffect } from 'react';
import StatusContainer from '../shared/StatusContainer';
import { useWallets, useAddAccount } from '../../hooks/useAccounts';

type AddWalletProps = {
    onClose: () => void;
};

const AddWalletForm: React.FC<AddWalletProps> = ({ onClose }) => {
    const { data: wallets, isLoading, error, refetch } = useWallets();
    const addAccountMutation = useAddAccount();
    const [selectedCurrency, setSelectedCurrency] = useState<string>('');

    useEffect(() => {
        if (wallets && wallets.length > 0) {
            setSelectedCurrency(wallets[0].currency);
        }
    }, [wallets]);

    const handleCreateWallet = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedWallet = wallets?.find((w) => w.currency === selectedCurrency);
        if (!selectedWallet) return;

        addAccountMutation.mutate(selectedWallet, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <StatusContainer loading={isLoading} error={error as string | null} onRetry={refetch}>
            <div className="add-wallet-modal">
                <div className="modal-header">
                    <h3>Add new wallet</h3>
                    <button onClick={onClose} className="modal-close-btn">
                        &times;
                    </button>
                </div>
                <p className="modal-info-text">The crypto wallet will be created instantly and be available in your list of wallets.</p>
                <form onSubmit={handleCreateWallet} className="add-wallet-form">
                    <label htmlFor="wallet-select" className="select-label">
                        Select wallet
                    </label>
                    <select id="wallet-select" value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)} className="wallet-select">
                        {wallets?.map((wallet) => (
                            <option key={wallet.currency} value={wallet.currency}>
                                {wallet.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit" disabled={addAccountMutation.isLoading} className="create-wallet-btn">
                        {addAccountMutation.isLoading ? 'Creating...' : 'Create wallet'}
                    </button>
                    {addAccountMutation.isError && (
                        <div className="create-error-container">
                            <div className="error-content">
                                <img src="/network-error.svg" alt="Error" className="error-icon-small" />
                                <span className="create-error-text">{(addAccountMutation.error as Error).message}</span>
                            </div>
                            <button onClick={() => addAccountMutation.reset()} className="error-close-btn">
                                &times;
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </StatusContainer>
    );
};

export default AddWalletForm;
