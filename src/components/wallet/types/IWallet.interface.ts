export type IName = 'Naira' | 'Ethereum' | 'Bitcoin' | 'Steller' | 'Litecoin' | 'SureRemit' | 'Tether' | 'Ripple' | 'Dogecoin' | 'TRON'
type TCurrency = 'NGN' | 'ETH' | 'BTC' | 'XLM' | 'LTC' | 'RMT' | 'USDT' | 'DOGE' | 'TRX' | 'XRP';

export type IWallet= {
    id: string,
    currency: TCurrency,
    hold: string,
    pending_balance: number,
    balance: number,
    name: IName
    deposit: string,
    type: 'fiat' | 'digital',
    payout: boolean,
    imgURL: string,
}


export type IColor= { name: TCurrency, color: string }

export type ICustomize = IColor & { icon: string }