import { ICustomize, IWallet } from "./types/IWallet.interface";
import customize from "./customize";
class Wallet {
    wallet: IWallet;
    customize: ICustomize []
    constructor (wallet: IWallet) {
        this.wallet = wallet
        this.customize = customize;
    }

    get custom () {
        return this.customize.find((e) => e.name === this.wallet.currency);
    }


    get value () {
        return new Intl.NumberFormat().format(this.wallet.balance);
    }
};


export default Wallet;