import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { chevronRight, leftDecor, rightDecor } from "../../assets";
import { AddWallet, NetworkError } from "../../components";
import Loader from "../../components/shared/Loader";
import Modal from "../../components/shared/Modal";

interface AccountProps {
    name: string;
    balance: string;
    currency: string;
    imgURL: string;
    id: string
}

export function Wallet() {

    const [accountList, setAccountList] = useState<AccountProps[]>([]);
    const [flags, setFlags] = useState({
        isLoading: true,
        isError: false,
    });
    const [modalState, setModalState] = useState(false);

    const fetchAccounts = useCallback(() => {
        setAccountList([]);
        setFlags(prevS => ({
            ...prevS,
            isLoading: true,
            isError: false,
        }));

        fetch("http://localhost:3090/accounts")
            .then(res => res.json())
            .then(data => setAccountList(data))
            .catch(() => setFlags(prevS => ({ ...prevS, isError: true })))
            .finally(() => setFlags(prevS => ({ ...prevS, isLoading: false })));

    }, []);

    useEffect(() => {
        let isMounted = true;

        setAccountList([]);
        setFlags(prevS => ({
            ...prevS,
            isLoading: true,
            isError: false,
        }));

        fetch("http://localhost:3090/accounts")
            .then(res => res.json())
            .then(data => {
                if (isMounted) setAccountList(data)
            })
            .catch(() => {
                if (isMounted) setFlags(prevS => ({ ...prevS, isError: true }))
            })
            .finally(() => {
                if (isMounted) setFlags(prevS => ({ ...prevS, isLoading: false }))
            });

        return () => { isMounted = false }

    }, []);

    return (
        <>

            <Modal
                isOpen={modalState}
                children={
                    <AddWallet
                        closeModal={() => setModalState(false)}
                        fetchAccounts={fetchAccounts}
                    />
                }
            />

            <PageHeader>
                <PageTitle>Wallet</PageTitle>
                {
                    !flags.isLoading &&
                    <AddButton onClick={() => setModalState(prevS => !prevS)}>+ Add new wallet</AddButton>
                }
            </PageHeader>

            <MainBody removeMargin={!!accountList.length} >
                {
                    flags.isLoading ?
                        <Loader />
                        :
                        flags.isError ?
                            <NetworkError tryAgainCallback={fetchAccounts} />
                            :
                            <Accounts>
                                {
                                    accountList.length > 0 &&
                                    accountList.map(({ imgURL, name, id, balance, currency }) =>
                                        <AccountCard key={id}>
                                            <LeftDecor src={leftDecor} />
                                            <RightDecor src={rightDecor} />

                                            <AccountContent >
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <AccountImage src={imgURL} />
                                                    <AccountName>{name}</AccountName>
                                                </div>

                                                <AccountBalance>{balance} {currency}</AccountBalance>

                                                <AccountChevron>
                                                    <ChevronImage src={chevronRight} />
                                                </AccountChevron>
                                            </AccountContent>
                                        </AccountCard>
                                    )
                                }
                            </Accounts>
                }
            </MainBody >
        </>
    );
}

interface BodyProps {
    removeMargin?: boolean;
}

const PageHeader = styled.div`
    display: flex; justify-content: space-between; width: 100%;
`

const PageTitle = styled.h2`
    margin-bottom: 0
`

const AddButton = styled.p`
    margin-bottom: 0; cursor: pointer; font-weight: 500;display:flex; align-items: self-end
`

const MainBody = styled.div<BodyProps>`
    margin-top: ${props => props.removeMargin ? "0" : "7rem"};
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Accounts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    justify-content: space-between;
    border-top: 1px solid #e6e6e6;
    margin-top: 2rem;
    padding-top: 2rem;
    width: 100%;

    @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const AccountCard = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #111111;
    border-radius: 10px;
    min-height: 150px;
    min-width: 240px;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
    cursor: pointer;
    
    &:hover {
        box-shadow: 0px 10px 20px rgba(114, 112, 112, 0.74);
    }
`

const LeftDecor = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index:0
`

const RightDecor = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:0
`

const AccountName = styled.h3`
    line-height: 18px;
    color: #9AA5B1;
    margin-left: 8px;
    font-size: 14px;
`

const AccountBalance = styled.p`
    font-size: 16px;
    line-height: 18px;
    margin-top: 10px;
    color: white;
    font-weight: 500;
`

const AccountImage = styled.img`
    width: 34px;
    background-color: #303030;
    height: 34px;
    border-radius: 17px;
`

const ChevronImage = styled.img`
    width: 30px;
    height: 16px;
`

const AccountContent = styled.div`
    z-index: 2; 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 16px
`

const AccountChevron = styled.div`
    align-self: flex-end; display: flex;
    justify-content: center; align-items: center;
    margin-left: auto; background-color: #303030;
    height: 32px; width: 32px; border-radius: 50%
`