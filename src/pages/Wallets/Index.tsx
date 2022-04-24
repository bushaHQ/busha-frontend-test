import { ChangeEvent, useCallback, useMemo, useState, VoidFunctionComponent } from "react";
import WalletCard from '../../components/organisms/WalletCard/Index'
import Modal from '../../components/shared/Modal'
import Loader from '../../components/shared/Loader'
import CloseIcon from '../../assets/icons/CloseIcon'
import Header from '../../components/molecules/Header/Index'
import Button from '../../components/atoms/Button/Index'
import Select from '../../components/molecules/Select/Index'
import { useAccounts } from '../../hooks/useAccounts'
import './Wallets.scss'
import { transformAccounts, transformWalletOptions } from "../../helpers/transformers";
import Alert from '../../components/molecules/Alert/Index'
import WarningIcon from '../../assets/icons/WarningIcon'
import { AccountResponse, WalletResponse } from "../../helpers/types";
import { useWallets } from "../../hooks/useWallets";

const Wallets: VoidFunctionComponent<any> = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedWalletValue, setSelectedWalletValue] = useState('')
    const [message, setMessage] = useState('Network Error')
    const { data: wallets, loading: isLoadingWallets, getData: getAccounts } = useAccounts();
    const { data: walletTypes, loading: isLoadingWalletTypes } = useWallets();

    const walletItems = useMemo(() => transformWalletOptions(walletTypes as WalletResponse[]), [walletTypes])
    const accountItems = useMemo(() => transformAccounts(wallets as AccountResponse[]), [wallets])

    const onAddNewWallet = useCallback(() => {
        setShowModal(true)
    }, [])

    const onCreateWallet = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3090/accounts',
            {
                // Adding method type
                method: "POST",
                 
                // Adding body or contents to send
                body: JSON.stringify({
                    currency: selectedWalletValue 
                }),
                 
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            const  data = await response.json()
            if(data.error){
                setMessage(data.error)
            }

            if(data){
                wallets.push(data)
                getAccounts()
                setShowModal(false)
            }
        
        } catch(error) {
            setMessage(error)
        } finally {
            // setIsLoading(true)
        }

    }, [getAccounts, selectedWalletValue, wallets])
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
       setSelectedWalletValue(event.target.value);
    }

    const hideModal = useCallback(() => {
        setShowModal(false)
    }, [])
    
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

                {isLoadingWallets &&  (
                     <div className="modal__loader">
                        <Loader size={70} />
                    </div>
                )}

                {!isLoadingWallets && <WalletCard items={accountItems} />}

                <Modal isOpen={showModal}>
                    <div className="modal">
                        {!isLoadingWalletTypes && (
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
                                            <p>{message}</p>
                                        </div>
                                        
                                        <CloseIcon color="#D72C0D" /> 
                                    </div>
                                </Alert>
                            </>
                        )}
                    </div>
                    
                    {isLoadingWalletTypes && (
                        <div className="modal__loader">
                            <Loader size={70} />
                        </div>
                    )}
                </Modal>
        </main>
    )
}
  
export default Wallets