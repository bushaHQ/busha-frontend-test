import { v4 as uuidv4 } from 'uuid';
import { useQuery, useMutation, useQueryClient } from 'react-query';

export type Account = {
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

export type Wallet = {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
};

const BASEURL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_BASEURL_LOCAL : import.meta.env.VITE_BASEURL;

const fetchAccounts = async (): Promise<Account[]> => {
    const response = await fetch(`${BASEURL}/accounts`);
    if (!response.ok) {
        throw new Error('Network Error');
    }
    return response.json();
};

const fetchWallets = async (): Promise<Wallet[]> => {
    const response = await fetch(`${BASEURL}/wallets`);
    if (!response.ok) {
        throw new Error('Network Error');
    }
    return response.json();
};

const createAccount = async (wallet: Wallet): Promise<void> => {
    const response = await fetch(`${BASEURL}/accounts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currency: wallet.currency }),
    });
    if (!response.ok) {
        throw new Error('Network Error');
    }
};

export const useAccounts = () => useQuery('accounts', fetchAccounts);
export const useWallets = () => useQuery('wallets', fetchWallets);

export const useAddAccount = () => {
    const queryClient = useQueryClient();

    return useMutation(createAccount, {
        onMutate: async (wallet: Wallet) => {
            await queryClient.cancelQueries('accounts');
            const previousAccounts = queryClient.getQueryData<Account[]>('accounts') || [];

            const newAccount: Account = {
                id: uuidv4(),
                currency: wallet.currency,
                balance: '0',
                name: wallet.name,
                imgURL: wallet.imgURL,
                hold: '0',
                pending_balance: '0',
                type: wallet.type,
                deposit: true,
                payout: true,
            };

            queryClient.setQueryData<Account[]>('accounts', [...previousAccounts, newAccount]);

            return { previousAccounts };
        },
        onError: (_err, _wallet, context) => {
            if (context?.previousAccounts) {
                queryClient.setQueryData('accounts', context.previousAccounts);
            }
        },
        onSuccess: () => {
            // queryClient.invalidateQueries('accounts');
        },
    });
};
