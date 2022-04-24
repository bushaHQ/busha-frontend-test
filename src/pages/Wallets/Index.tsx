import { useCallback, useMemo, useState, VoidFunctionComponent } from "react";
import WalletCard from '../../components/organisms/WalletCard/Index'
import { CurrencyCode } from '../../helpers/currency';
import { items, walletOptions } from '../../helpers/data';
import Modal from '../../components/shared/Modal'
import Loader from '../../components/shared/Loader'
import CloseIcon from '../../assets/icons/CloseIcon'
import Header from '../../components/molecules/Header/Index'
import Button from '../../components/atoms/Button/Index'
import Select, { SelectItemType } from '../../components/molecules/Select/Index'
import { useApi } from '../../hooks/useApi'
import './Wallets.scss'
import { transformAccounts, transformWalletOptions } from "../../helpers/transformers";
import Alert from '../../components/molecules/Alert/Index'
import WarningIcon from '../../assets/icons/WarningIcon'

const Wallets: VoidFunctionComponent<any> = () => {
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { data: wallets, loading: isLoadingWallets } = useApi('/accounts');

    const walletItems = useMemo(() => transformWalletOptions(walletOptions), [])
    // const accountItems = useMemo(() => transformAccounts(items), [])

    const onAddNewWallet = useCallback(() => {
        setShowModal(true)
    }, [])

    const onCreateWallet = useCallback(() => {
        try{
            setIsLoading(true)

        } catch {

        } finally {
            setIsLoading(true)
        }

    }, [])

    const onChange = () => {

    }

    const hideModal = useCallback(() => {
        setShowModal(false)
    }, [])

    if (!isLoadingWallets) console.log(wallets);
    
    return (
         <main>
            <Header 
                title="Wallet" 
                append={
                    <p className="wallet__add-new" 
                     onClick={onAddNewWallet}
                    >
                     + Add new wallet
                    </p>
                }
           />

                <WalletCard items={items} />

                <Modal isOpen={showModal}>
                    <div className="modal">
                        {!isLoading && (
                            <>
                                <Header 
                                    title="Add new wallet" 
                                    titleClassName="modal__title"
                                    headerClassName="modal__header"
                                    append={
                                        <div className="modal__close-icon" onClick={hideModal}>
                                            <CloseIcon color="#000" />
                                        </div>
                                    }
                                />

                                <p className="modal__text">The crypto wallet will be created instantly and be available in your list of wallets.</p>

                                <div className="modal__form">
                                        <Select label="Select wallet" placeholder="Select" options={walletItems} onChange={onChange} />
                                        
                                        <div className="modal__form-button">
                                             <Button 
                                                onClick={onCreateWallet} 
                                                buttonLabel="Create wallet"
                                            />
                                        </div>
                                </div>

                                <Alert>
                                    <div className="modal__error">
                                        <div className="modal__error-message">
                                            <WarningIcon />
                                            <p>Network Error</p>
                                        </div>
            
                                            <CloseIcon color="#D72C0D" /> 
                                     
                                    </div>
                                </Alert>
                            </>
                        )}
                    </div>
                    
                    {isLoading && (
                        <div className="modal__loader">
                            <Loader size={70} />
                        </div>
                    )}
                </Modal>
        </main>
    )
}
  
export default Wallets