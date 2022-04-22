import { VoidFunctionComponent } from "react";
import WalletCard from '../../components/organisms/WalletCard/Index'
import { CurrencyCode } from '../../helpers/currency';

const Wallets: VoidFunctionComponent<any> = () => {
    const items = [
        {
        id: "977dacbb-95b4-4432-9dc9-b66f707b7043",
        currency: "NGN",
        hold: "530000000",
        pendingBalance: "0",
        balance: "2499998700",
        name: "Naira",
        type: "fiat",
        deposit: true,
        payout: true,
        imgURL: "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/NGN.svg"
        },
        {
        id: "d92abd3e-933b-4f23-a3e8-fe641e9f1bec",
        currency: "ETH",
        hold: "0.508056",
        pendingBalance: "0",
        balance: "0.1",
        name: "Ethereum",
        type: "digital",
        deposit: true,
        payout: true,
        imgURL: "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/ETH.svg"
        },
        {
        id: "5ad2ee10-5ca6-4576-96fe-1ef642057681",
        currency: "BTC",
        hold: "0",
        pendingBalance: "0.00001",
        balance: "142.999009",
        name: "Bitcoin",
        type: "digital",
        deposit: true,
        payout: true,
        imgURL: "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/BTC.svg"
        }
        ]
    return (
         <div>
             <WalletCard items={items} />
        </div>
    )
}
  
export default Wallets