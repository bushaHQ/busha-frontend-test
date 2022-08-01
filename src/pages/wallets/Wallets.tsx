import { WalletCard } from "../../components/form/WalletCard";
import styled from "styled-components";
import Loader from "../../components/shared/Loader";
import { AddWallets } from "../../components/modals/AddWallets";
import { useState, useEffect } from 'react';
import { IAccount, fetchAccounts } from '../../api/api'
import { ErrorRetry } from '../../components/form/ErrorRetry'

export function Wallets() {
    const [errorAccounts, setErrorAccounts] = useState(false);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([] as IAccount[]);
    const [addWalletModal, setAddWalletModal] = useState(false)

    useEffect(() => {
        if (posts.length === 0) {
            getAccounts()
        }
    }, [posts.length])

    async function getAccounts() {
        setErrorAccounts(false)
        setLoading(true)
        try {
            setPosts(await fetchAccounts())
            setLoading(false)
        } catch (ex) {
            setErrorAccounts(true)
            setLoading(false)
        }
    }

    function addPost(post: IAccount) {
        setPosts(posts.concat(post));
    }

    return (
        <Container>
            <TitleContainer>
                <WalletsTitle>Wal‎lets</WalletsTitle>
                {!loading && !errorAccounts &&
                    <>
                        <AddNewWAlletButton onClick={() => setAddWalletModal(true)}>
                            <img src="./assets/icons/Plus.svg" alt="plus icon" /> Add new wallet</AddNewWAlletButton>
                        <AddWallets isOpen={addWalletModal} setIsOpen={setAddWalletModal} addPost={addPost} />
                    </>
                }
            </TitleContainer>
            {loading &&
                <LoaderContainer>
                    <Loader aria-label="Loading..." width={8} size={75.37} />
                </LoaderContainer>
            }
            <ErrorRetry show={errorAccounts} retry={getAccounts} />
            {!loading && !errorAccounts &&
                <CardsContainer>{posts.map((accounts: IAccount) =>
                    <WalletCard key={accounts.id} accounts={accounts} />
                )}</CardsContainer>
            }
        </Container>
    )
}

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const WalletsTitle = styled.div`
    font-size: 32px;
    font-weight: 700;
    @media (max-width: 350px) {
        font-size: 27px;
    }
`

const AddNewWAlletButton = styled.button`
    background: white;
    border: none;
    padding: 0;
    font-size: 16px;
    font-weight: 550;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
`

const LoaderContainer = styled.div`
    width: 95%;
    height: 48vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`    
    // height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 110px 11.1111% 60px calc(240px + 65px + 11.1111%);
    @media (max-width: 750px) {
        padding: 110px 11.1111% 60px 11.1111%;
    }
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2.8vw;
    row-gap: 2.8vw;
    padding: 24px 4px 5vh 10px;
    border-top: 1px solid rgba(211, 213, 216, 0.5);
    @media (max-width: 1250px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 1000px) {
        grid-template-columns: auto;
    }
    @media (max-width: 750px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 450px) {
        grid-template-columns: auto;
    }
`