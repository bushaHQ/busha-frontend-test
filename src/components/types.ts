//Global types

export type AppState = {
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    data: any[];
    reload?: boolean;
    errMssge?: any;
}

export type WalletData = {
    id?: string;
    currency: string;
    hold?: string;
    pending_balance?: string;
    balance: string;
    name: string;
    type?: string;
    deposit?: boolean;
    payout?: boolean;
    imgURL: string;
}

export type ErrorProps = {
    action: () => void;
}

export type CardProps = {
    imageUrl: string;
    currency: string;
    balance: string;
    name: string;
}

export type AddWalletProps = {
    onHide: () => void;
    reloadAccount: () => void;
    setAccList: (value: any) => any;
}

export type AddWalletState = {
    isLoading?: boolean;
    isError?: boolean;
    isSubmitting?: boolean;
    isSubmitError?: boolean;
    errMssge?: any;
    data: any[];
    selected?: string;
    selectedName?: string;
    subErrMssge?: string;
}