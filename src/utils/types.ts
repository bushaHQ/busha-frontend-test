export interface CardData {
    currency: string,
    imgURL: string,
    name: string,
    type: string,
}

export interface Accounts {
    loading: boolean,
    error: boolean,
    accountData: CardData[]
}
