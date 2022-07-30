import { useEffect, useState } from "react";
import Loader from "../Loader";
import { getAccounts, getWallets, setWallet } from "../../../utils/getData";
import Modal from "../Modal";
import NetworkError from "../networkError";

import styles from "./styles.module.scss";

export default function Wallets() {

    const [accountData, setAccountData] = useState([]);
    const [walletData, setWalletData] = useState([]);
    const [walletLoad, setWalletLoad] = useState(false);
    const [accountLoad, setAccountLoad] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<any>([])
    const [createError, setCreateError] = useState(false);

    useEffect(() => {
        (async () => {
            await getAccountData();
        })()
    }, [openModal])

    const getAccountData = async () => {
        setAccountLoad(true);
        const data = await getAccounts();
        setAccountData(data)
        setAccountLoad(false);
    }

    const getWalletData = async () => {
        setWalletLoad(true);
        const data = await getWallets();
        setWalletData(data)
        setSelectedWallet(data[0])
        setWalletLoad(false);
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
        setWallet(selectedWallet, setCreateError, setOpenModal)
    }


    return (
        <div className={styles.wallets_container}>
            <Modal isOpen={openModal}>
                {walletLoad ?
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                    :
                    walletData.length ?
                        <div className={styles.modalContent}>
                            <div className={styles.modal_header}>
                                <h2>Add new wallet</h2>
                                <img src="assets/icons/close.svg" alt="" onClick={() => setOpenModal(false)} />
                            </div>
                            <div className={styles.modal_text}>The crypto wallet will be created instantly and be available in your list of wallets.</div>
                            <div className={styles.modal_input_content}>
                                <div className={styles.input_title}>Select wallet</div>
                                <div className={styles.modal_input}>
                                    <div className={`${styles.input_text} ${openSelect && styles.active_select}`} onClick={() => setOpenSelect(!openSelect)}>{selectedWallet?.name}</div>
                                    {
                                        openSelect &&
                                        <div className={styles.selectOptions}>
                                            {walletData?.map((e: any, i) => {
                                                return (
                                                    <div key={i} className={styles.option} onClick={() => changeSelectOption(e)}>{e.name}</div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className={styles.input_button} onClick={() => AddNewWallet()}>Create wallet</div>
                            </div>
                            {createError &&
                                <div className={styles.create_error}>
                                    <div className={styles.error}>
                                        <img src="assets/icons/create_error.svg" alt=""/>
                                        <div>Network Error</div>
                                    </div>
                                    <img src="assets/icons/redClose.svg" alt="" className={styles.close} onClick={() => setCreateError(false)} />
                                </div>}
                        </div>
                        :
                        <NetworkError onClick={() => getWalletData()} />
                }
            </Modal>
            <div className={styles.wallet_header}>
                <h1>Wallets</h1>
                {accountData.length &&
                    <p onClick={() => openAddWalletModal()}>+ Add new wallet</p>
                }
            </div>
            <div>
                {accountLoad ?
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                    :
                    accountData.length ?
                        <div className={styles.cardContainer}>
                            {accountData?.map((e: any, i) => {
                                return (
                                    <div key={i} className={styles.card}>
                                        <div className={styles.imageContent}>
                                            <img src={e.imgURL} alt=''/>
                                            <div>{e.name}</div>
                                        </div>
                                        <div className={styles.balance}>
                                            {e.balance} {e.currency}
                                        </div>
                                        <div className={styles.arrow}>
                                            <img src="assets/icons/rightArrow.svg" alt=""/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <NetworkError onClick={() => getAccountData()} />
                }
            </div>
        </div>
    )
}