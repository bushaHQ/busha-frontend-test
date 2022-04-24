import { VoidFunctionComponent } from "react";
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon";
import Card from '../../molecules/Card/Index'
import toAmount from '../../../helpers/toAmount'
import './WalletCard.scss'
import { AccountItems } from "../../../helpers/types";

interface WalletCardProps {
    items: AccountItems[]
}
const WalletCard: VoidFunctionComponent<WalletCardProps> = ({ items }) => {

    return (
         <div className="wallet">
                {items.map((item) => (
                     <Card key={item.id} >
                        <div className="wallet__content">
                           <div className="wallet__currency">
                               <div>
                                    <img src={item.imgURL} alt={item.name} />
                               </div>
                               <p>{item.name}</p>
                           </div>

                           <div className="wallet__balance">
                               <p>{item.type === 'fiat' ? toAmount(item.balance) : `${item.balance} ${item.currencyCode}`}</p>
                           </div>

                           <div className="wallet__arrow">
                               <ArrowRightIcon />
                           </div>
                        </div>
                    </Card>
                ))}
        </div>
    )
}
  
export default WalletCard