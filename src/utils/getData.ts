import { Accounts, CardData } from "./types";

export async function getAccounts(setAccount: any) {
    const response = await fetch('http://localhost:3090/accounts');

    if (response.ok) {
        return response.json();
    } else {
        setAccount((prev: Accounts) => ({
            ...prev,
            error: true
        }))
    }
}

export async function getWallets(setWallets: any) {
    const response = await fetch('http://localhost:3090/wallets')
    try {
        if (response.ok) {
            return await response.json();
        }
        throw new Error('Something went wrong');
    }
    catch {
        setWallets((prev: any) => ({
            ...prev,
            error: true
        }))
    }
}

export async function createWallet(data: CardData | undefined) {

    const response = await fetch('http://localhost:3090/accounts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "currency": `${data?.currency}` })
    });
    return response;
}