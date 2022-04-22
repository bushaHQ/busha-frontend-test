import { useMemo, VoidFunctionComponent } from "react";
import accounts from "../../../db/accounts";
import WalletCard, { WalletItems } from '../../components/organisms/WalletCard/Index'
import { CurrencyCode } from '../../helpers/currency';
import { items } from '../../helpers/data';
import { useApi } from '../../hooks/useApi'

const Wallets: VoidFunctionComponent<any> = () => {
    const { data: wallets, loading: isLoadingWallet } = useApi('/accounts');
    
      // print the output
      if (!isLoadingWallet) console.log(wallets);

    // const walletItems: WalletItems[] = useMemo(() => {
    //     if(wallets !== undefined){
    //        return  wallets.map<WalletItems>((items) => ({
    //             ...items,
    //             pendingBalance: items.pending_balance
    //         }))
    //     }
    //     return []
    // }, [wallets])
    
    return (
         <div>
             <WalletCard items={items} />
        </div>
    )
}
  
export default Wallets