
export async function getAccounts(setAccount: any) {
    const response = await fetch('http://localhost:3090/accounts');

    if (response.ok) {
        return response.json();
    } else {
        setAccount((prev: any) => ({
            ...prev,
            error: true
        }))
    }
}

export async function getWallets(setWallets: any) {
    let walletData: any;
    setWallets((prev: any) => ({
        ...prev,
        loading: true
    }))
    await fetch('http://localhost:3090/wallets')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .then((data) => {
            walletData = data
        })
        .catch(() => {
            setWallets((prev: any) => ({
                ...prev,
                error: true
            }))
        })
        .finally(() => {
            setWallets((prev: any) => ({
                ...prev,
                loading: false
            }))
        })

    return walletData;
}

export async function setWallet(data: any, setCreateError: any, setCreateWalletSubmitting: any, setAccount: any) {
    setCreateWalletSubmitting(true);
    setAccount((prev: any) => ({
        ...prev,
        loading: true
    }))

    try {
        const response = await fetch('http://localhost:3090/accounts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "currency": `${data?.currency}` })
        });

        console.log(data);
        
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const x = await response.json();
        return {
            ...x,
            imgURL: data.imgURL
        };
    } catch (err) {
        setCreateError(true);
    } finally {
        setCreateWalletSubmitting(false);
        setAccount((prev: any) => ({
            ...prev,
            loading: false
        }))
    }
}