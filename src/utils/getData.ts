export async function getAccounts() {
    let accountData: any;
    await fetch('http://localhost:3090/accounts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            accountData = data
        })

    return accountData;
}

export async function getWallets() {
    let walletData: any;
    await fetch('http://localhost:3090/wallets')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            walletData = data
        })

    return walletData;
}

export async function setWallet(data: any, setCreateError: any, setOpenModal: any) {
    await fetch('http://localhost:3090/accounts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "currency": `${data.currency}` })
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
        .then(() => {
            setOpenModal(false)
        })
        .catch(() => {
            setCreateError(true)
        });
}