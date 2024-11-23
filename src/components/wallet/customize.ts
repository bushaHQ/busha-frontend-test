// import { ICustomize } from "../interface/IWallet.interface";
import walletIcons from "./walletIcons";
type IName =
    | "Naira"
    | "Ethereum"
    | "Bitcoin"
    | "Steller"
    | "Litecoin"
    | "SureRemit"
    | "Tether"
    | "Ripple"
    | "Dogecoin"
    | "TRON";
type TCurrency =
    | "NGN"
    | "ETH"
    | "BTC"
    | "XLM"
    | "LTC"
    | "RMT"
    | "USDT"
    | "DOGE"
    | "TRX"
    | "XRP";

interface IWallet {
    id: string;
    currency: TCurrency;
    hold: string;
    pending_balance: number;
    balance: number;
    name: IName;
    type: "fiat" | "digital";
    payout: boolean;
    imgURL: string;
}

interface IColor {
    name: TCurrency;
    color: string;
}

interface ICustomize extends IColor {
    icon: string;
}
const customize: ICustomize[] = [
    { name: 'NGN', color: '#05A357', icon: walletIcons.Naira },
    { name: 'ETH', color: '#627EEA', icon: walletIcons.Ethereum },
    { name: 'BTC', color: '#FF9900', icon: walletIcons.Bitcoin },
    { name: 'XLM', color: '#00aeef', icon: walletIcons.Litcoin },
    { name: 'DOGE', color: '#d5b0ac', icon: walletIcons.Bitcoin },
    { name: 'LTC', color: '#CEA0AE', icon: walletIcons.Bitcoin },
    { name: 'RMT', color: '#684551', icon: walletIcons.Bitcoin },
    { name: 'TRX', color: '#402E2A', icon: walletIcons.Bitcoin },
    { name: 'USDT', color: '#9CD08F', icon: walletIcons.Bitcoin },
    { name: 'XRP', color: '#402E2A', icon: walletIcons.Bitcoin },

];

export default customize;