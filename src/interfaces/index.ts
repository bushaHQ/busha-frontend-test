export interface Account {
    id: string;
    currency: string;
    hold: number;
    pending_balance: number;
    balance: number;
    name: string;
    type: string;
    deposit: boolean;
    payout: boolean;
    imgURL: string;
}