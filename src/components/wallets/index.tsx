import { useEffect, useState } from "react";
import Loader from "../shared/Loader";
import { getAccounts, getWallets, createWallet } from "../../utils/getData";
import Modal from "../shared/Modal";
import NetworkError from "../networkError";
import CloseIcon from '../../assets/closeIcon.svg';
import { CardData, Accounts } from "../../utils/types";

import styles from "./styles.module.scss";

export default function Wallets() {
    const [walletData, setWalletData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<CardData>();
    const [createError, setCreateError] = useState(false);
    const [account, setAccount] = useState<Accounts>({
        loading: true,
        error: false,
        accountData: []
    });
    const [wallet, setWallet] = useState({
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
            setAccount({
                loading: false,
                error: false,
                accountData: []
            })
        }
    }, []);

    const getAccountData = async () => {
        setAccount((prev: Accounts) => ({
            ...prev,
            loading: true
        }))
        const data = await getAccounts(setAccount);
        setAccount((prev: Accounts) => ({
            ...prev,
            accountData: data,
            loading: false
        }))


    }

    const getWalletData = async () => {
        setWallet((prev: any) => ({
            ...prev,
            loading: true
        }))
        const data = await getWallets(setWallet);
        setWalletData(data)
        if (data) {
            setSelectedWallet(data[0])
        }
        setWallet((prev: any) => ({
            ...prev,
            loading: false
        }))
    }

    const openAddWalletModal = async () => {
        setOpenModal(true);
        await getWalletData();
    }

    const changeSelectOption = (event: any) => {
        const index = event.nativeEvent.target.selectedIndex;
        const selectedData = walletData.find((e: CardData) => {
            return (
                e.name === event.nativeEvent.target[index].text
            )
        })
        setSelectedWallet(selectedData);
        setOpenSelect(false)
    }

    const AddNewWallet = async () => {
        setCreateWalletSubmitting(true);
        try {
            const response = await createWallet(selectedWallet)
            if (response.ok) {
                const data = await response.json();
                account.accountData.push(await data);
            }
            else {
                throw new Error('Something went wrong')
            }
            setOpenModal(false);
        }
        catch {
            setCreateError(true);
        }
        finally {
            setAccount({
                ...account,
            });
            setCreateWalletSubmitting(false);
        }
    }

    return (
        <div className={styles.wallets_container}>
            <Modal isOpen={openModal}>
                {wallet.loading ?
                    <>
                        <img src={CloseIcon} alt="" className={styles.close_button} onClick={() => setOpenModal(false)} aria-label="Close button" />
                        <div className={styles.loader}>
                            <Loader />
                        </div>
                    </>
                    :
                    wallet.error ?
                        <>
                            <img src={CloseIcon} alt="" className={styles.close_button} onClick={() => setOpenModal(false)} aria-label="Close button" />
                            <NetworkError onClick={() => getWalletData()} />
                        </>
                        :
                        <div className={styles.modalContent}>
                            <div className={styles.modal_header}>
                                <h2>Add new wallet</h2>
                                <img src={CloseIcon} alt="" onClick={() => setOpenModal(false)} aria-label="Close button" />
                            </div>
                            <div className={styles.modal_text}>The crypto wallet will be created instantly and be available in your list of wallets.</div>
                            <div className={styles.modal_input_content}>
                                <div className={styles.input_title}>Select wallet</div>
                                <div className={`${styles.modal_input} ${openSelect && styles.active_select}`}>
                                    <select className={styles.input_text} onChange={(event) => changeSelectOption(event)} onClick={() => setOpenSelect(!openSelect)} role={"combobox"} >{selectedWallet?.name}
                                        {
                                            walletData?.map((e: any, i) => {
                                                return (
                                                    <option key={i} value={e.currency} className={styles.option}>{e.name}</option>
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
                                            <span>{e.balance}</span> <span>{e.currency}</span>
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