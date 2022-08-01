import { useEffect, useState } from "react";
import Loader from "../Loader";
import { getAccounts, getWallets, setWallet } from "../../../utils/getData";
import Modal from "../Modal";
import NetworkError from "../networkError";
import CloseIcon from '../../../assets/closeIcon.svg'

import styles from "./styles.module.scss";

export default function Wallets() {
    const [walletData, setWalletData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<any>([])
    const [createError, setCreateError] = useState(false);
    const [account, setAccount] = useState<any>({
        loading: true,
        error: false,
        accountData: []
    });
    const [wallets, setWallets] = useState({
        loading: true,
        error: false
    });
    const [createWalletSubmitting, setCreateWalletSubmitting] = useState(false);

    useEffect(() => {
        (async () => {

            await getAccountData();
        })()
    }, [])

    useEffect(() => {
        return () => {
            setAccount(undefined)
        }
    }, []);

    const getAccountData = async () => {
        setAccount((prev: any) => ({
            ...prev,
            loading: true
        }))
        const data = await getAccounts(setAccount);
        setAccount((prev: any) => ({
            ...prev,
            accountData: data,
            loading: false
        }))

    }

    const getWalletData = async () => {
        const data = await getWallets(setWallets);
        setWalletData(data)
        if (data) {
            setSelectedWallet(data[0])
        }
    }

    const openAddWalletModal = async () => {
        setOpenModal(true);
        await getWalletData();
    }

    const changeSelectOption = (e: any) => {
        setSelectedWallet(e);
        setOpenSelect(false)
    }

    const AddNewWallet = async () => {
        const data = await setWallet(selectedWallet, setCreateError, setCreateWalletSubmitting, setAccount)
        account.accountData.push(data);
        
        setAccount({
            ...account,
        });
        setOpenModal(false)
    }

    return (
        <div className={styles.wallets_container}>
            <Modal isOpen={openModal}>
                {wallets.loading ?
                    <>
                        <img src={CloseIcon} alt="" className={styles.close_button} onClick={() => setOpenModal(false)} aria-label="Close button" />
                        <div className={styles.loader}>
                            <Loader />
                        </div>
                    </>
                    :
                    !wallets.error ?
                        <div className={styles.modalContent}>
                            <div className={styles.modal_header}>
                                <h2>Add new wallet</h2>
                                <img src={CloseIcon} alt="" onClick={() => setOpenModal(false)} aria-label="Close button" />
                            </div>
                            <div className={styles.modal_text}>The crypto wallet will be created instantly and be available in your list of wallets.</div>
                            <div className={styles.modal_input_content}>
                                <div className={styles.input_title}>Select wallet</div>
                                <div className={styles.modal_input}>
                                    <select className={`${styles.input_text} ${openSelect && styles.active_select}`} onClick={() => setOpenSelect(!openSelect)} role={"combobox"} >{selectedWallet?.name}
                                        {
                                            walletData?.map((e: any, i) => {
                                                return (
                                                    <option key={i} value={e.currency} className={styles.option} onClick={() => changeSelectOption(e)}>{e.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <button className={styles.input_button} onClick={() => AddNewWallet()}>{createWalletSubmitting ? <Loader size={20} /> : 'Create wallet'}</button>
                            </div>
                            {createError &&
                                <div className={styles.create_error}>
                                    <div className={styles.error}>
                                        <img src="assets/icons/create_error.svg" alt="" />
                                        <div>Network Error</div>
                                    </div>
                                    <img src="assets/icons/redClose.svg" alt="" className={styles.close} onClick={() => setCreateError(false)} />
                                </div>}
                        </div>
                        :
                        <>
                            <img src={CloseIcon} alt="" className={styles.close_button} onClick={() => setOpenModal(false)} aria-label="Close button" />
                            <NetworkError onClick={() => getWalletData()} />
                        </>
                }
            </Modal>
            <div className={styles.wallet_header}>
                <h1>Wallet</h1>
                {
                    !account.error &&
                    <p onClick={() => openAddWalletModal()}>+ Add new wallet</p>
                }
            </div>
            <hr />
            <div>
                {account.loading ? (
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                ) :
                    account.error ? (<NetworkError onClick={getAccountData} />) : (
                        <div className={styles.cardContainer}>
                            {account.accountData?.map((e: any, i: number) => {
                                return (
                                    <div key={i} className={styles.card}>
                                        <div className={styles.imageContent}>
                                            <img src={e.imgURL} alt='' />
                                            <div>{e.name}</div>
                                        </div>
                                        <div className={styles.balance}>
                                            {e.balance} {e.currency}
                                        </div>
                                        <div className={styles.arrow}>
                                            <img src="assets/icons/rightArrow.svg" alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    )
}