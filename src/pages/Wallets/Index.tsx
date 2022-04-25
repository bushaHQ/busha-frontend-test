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
import Error from '../../components/molecules/Error/Index'

const Wallets: VoidFunctionComponent<any> = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [selectedWalletValue, setSelectedWalletValue] = useState<string>('')
    const [message, setMessage] = useState<string>('Network Error')
    const [buttonLabel, setButtonLabel] = useState<string>('Create Wallet')
    const { 
        data: wallets, 
        loading: isLoadingWallets, 
        getData: getAccounts,
        error: walletError, 
    } = useAccounts();
    const { 
        data: walletOptions, 
        loading: isLoadingWalletOptions, 
        error: walletOptionsError,
        getWalletOptions,
    } = useWallets();

    const walletItems = useMemo(() => transformWalletOptions(walletOptions as WalletResponse[]), [walletOptions])
    const accountItems = useMemo(() => transformAccounts(wallets as AccountResponse[]), [wallets])

    const onAddNewWallet = useCallback(() => {
        setShowModal(true)
    }, [])

    const onDismissAlert = useCallback(() => {
        setShowAlert(false)
    }, [])

    const onCreateWallet = useCallback(async () => {
        try {
            if(selectedWalletValue !== '') {
                setButtonLabel('Loading...')
                const response = await fetch('http://localhost:3090/accounts',
                {
                    method: "POST",
                    body: JSON.stringify({
                        currency: selectedWalletValue 
                    }),
                     
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
    
                const  data = await response.json()
           
                if(data.error) {
                    setMessage(data.error)
                    setShowAlert(true)
                }
    
                if(data) {
                    wallets.push(data)
                    setSelectedWalletValue('')
                    setShowModal(false)
                    setMessage('')
                    setShowAlert(false)
                    getAccounts()
                }
            } else {
                setMessage('Please select a wallet')
                setShowAlert(true)
            }
          
        } catch(error) {
            setMessage(error as string)
            setShowAlert(true)
        } finally {
            setButtonLabel('Create Wallet')
        }

    }, [getAccounts, selectedWalletValue, wallets])
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
       setSelectedWalletValue(event.target.value);
    }

    const hideModal = useCallback(() => {
        setMessage('')
        setShowAlert(false)
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
                     <div className="wallet__loader">
                        <Loader size={70} />
                    </div>
                )}

                {!isLoadingWallets && <WalletCard items={accountItems} />}

                {!!walletError && !isLoadingWallets &&(
                    <div className="wallet__error">
                         <Error 
                            message="Network Error" 
                            buttonLabel="Try again" 
                            handleError={getAccounts}
                        /> 
                    </div> 
                )}

                <Modal isOpen={showModal}>
                    <div className="modal">
                        {!isLoadingWalletOptions && (
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
                                                buttonLabel={buttonLabel}
                                            />
                                        </div>
                                </div>

                                {showAlert && (
                                    <Alert>
                                        <div className="modal__error">
                                            <div className="modal__error-message">
                                                <WarningIcon />
                                                <p>{message}</p>
                                            </div>

                                            <div className="modal__error-icon" onClick={onDismissAlert}>
                                                <CloseIcon color="#D72C0D" /> 
                                            </div>
                                        
                                        </div>
                                    </Alert>
                                )}
                            </>
                        )}

                        {!!walletOptionsError && !isLoadingWalletOptions &&(
                            <div className="wallet__error">
                                <Error 
                                    message="Network Error" 
                                    buttonLabel="Try again" 
                                    handleError={getWalletOptions}
                                /> 
                            </div> 
                        )}  
                    </div>
                    
                    {isLoadingWalletOptions && (
                        <div className="modal__loader">
                            <Loader size={70} />
                        </div>
                    )}
                </Modal>
        </main>
    )
}
  
export default Wallets