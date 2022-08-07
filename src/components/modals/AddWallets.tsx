import { useEffect, PropsWithChildren } from "react";
import Modal from "../shared/Modal";
import styled from "styled-components";
import Loader from "../shared/Loader";
import { useState } from "react";
import { addAccount, IWallet, fetchWallets } from '../../api/api'
import { Dropdown, DropdownItem } from '../form/Dropdown'
import { ErrorRetry } from "../form/ErrorRetry";
import { ErrorWallets } from "../form/ErrorWallets"

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    addPost: (value: any) => void;
}

export function AddWallets(props: PropsWithChildren<ModalProps>) {
    const [loading, setLoading] = useState(false);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [errorAccounts, setErrorAccounts] = useState(false);
    const [errorWallets, setErrorWallets] = useState(false);

    const [options, setOptions] = useState([] as DropdownItem[]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        if (props.isOpen) {
            getWallets()
        }

        return () => {
            setOptions([] as DropdownItem[])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isOpen])

    async function addNewWAllet() {
        setLoading(true)
        try {
            props.addPost(await addAccount(selectedOption))
            setLoading(false)
            props.setIsOpen(false)
        } catch {
            setErrorAccounts(true);
            setLoading(false);
        }
    }

    async function getWallets() {
        setOptionsLoading(true)
        props.setIsOpen(true)
        try {
            const wallets = await fetchWallets()
            setOptions(wallets.map<DropdownItem>((wal: IWallet): DropdownItem => (
                { id: wal.currency, val: wal.name })))
            setOptionsLoading(false)
        } catch {
            setErrorWallets(true);
            setOptionsLoading(false);
        }
    }

    function closeAddWallets() {
        setErrorAccounts(false)
        setErrorWallets(false)
        props.setIsOpen(false)
    }

    return (
        <Modal isOpen={props.isOpen}>
            {optionsLoading &&
                <LoaderContainer>
                    <Loader aria-label="Loading..." width={8} size={75.37} />
                </LoaderContainer>
            }
            <ErrorRetry show={errorWallets} retry={getWallets} />
            <AddWalletContainer>Add new wallet
                <AddWalletClose aria-label="Close button" onClick={closeAddWallets}>
                    <AddCloseIcon src="./assets/icons/Close.svg" alt="" />
                </AddWalletClose>
            </AddWalletContainer>
            <AddNewWalletDiscription>
                The crypto wallet will be created instantly and be available in your list of wallets.
            </AddNewWalletDiscription>
            <Dropdown options={options} optionSelected={(option) => setSelectedOption(option)}></Dropdown>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CreateWalletDiv onClick={addNewWAllet} id="add-wallet">Create wallet
                    {loading &&
                        <button style={{ width: 0, opacity: 0, position: "absolute" }} id="button-1">
                            <label htmlFor="button-1" >Loading...</label>
                        </button>
                    }
                </CreateWalletDiv>
                <ErrorWallets show={errorAccounts} />
            </div>
        </Modal>
    )
}

const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddWalletContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 105px;
    font-size: 24px;
    font-weight: 500;
    cursor: default;
    @media (max-width: 750px) {
        font-size: 20px;
        height: 90px;
    }
`

const AddWalletClose = styled.div`
    border: none;
    padding: 0;
    cursor: pointer;
    background: white; 
    margin-bottom: 10px;
    @media (max-width: 750px) {
        margin-bottom: 5px;
    }
`

const AddCloseIcon = styled.img`
    width: 16px;
    height: 16px;
    @media (max-width: 750px) {
        width: 10px;
        height: 10px;
    }
`

const AddNewWalletDiscription = styled.div`
    margin-top: 50px;
    color: rgba(62, 76, 89, 1);
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    padding-right: 7px;
    @media (max-width: 750px) {
        font-size: 14px;
        margin-top: 30px;
    }
`

const CreateWalletDiv = styled.div`
    background: black;
    color: white;
    border: none;
    padding: 16.5px 56px;
    margin: 82px 0px 16px 0px;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 500px) {
        padding: 16.5px 15%;
    }
    @media (max-width: 400px) {
        padding: 16.5px 10%;
    }
`