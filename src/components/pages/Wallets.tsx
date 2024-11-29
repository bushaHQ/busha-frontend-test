import * as React from "react";
import styled, { css } from "styled-components";

import Loader from "../shared/Loader";
import ErrorNotification from "../shared/ErrorNotification";
import Modal from "../shared/Modal";
import NewWalletForm from "../shared/NewWalletForm";
import AccountCard, { CurrencyAccount } from "../shared/AccountCard";

import { baseURL } from '../../utils/constants'

export default function Wallets() {

    const [accountList, setAccountList] = React.useState<CurrencyAccount[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [errorOcurred, setErrorOcurred] = React.useState(false)
    const [showNewWalletForm, setNewWalletState] = React.useState(false)

    const hasAccounts = React.useMemo(() => accountList.length > 0, [accountList])

    const isMountedRef = React.useRef(false);

    const fetchAccounts = async () => {
        try {

            const controller = new AbortController();
            const response = await fetch(`${baseURL}/accounts`, { signal: controller.signal });

            if (!isMountedRef.current) return;
            if (!response.ok) {
                setIsLoading(false)
                setErrorOcurred(true)
                return
            }

            const accounts: CurrencyAccount[] = await response.json()
            if (!isMountedRef.current) return;
            setAccountList(accounts);
            setErrorOcurred(false)
            setIsLoading(false)

        } catch (error: any) {
            if (!isMountedRef.current) return;
            console.log('Error fetching accounts: ', error)
            setIsLoading(false)
            setErrorOcurred(true)
        }

    }

    const handleAccountsFetching = () => {
        setAccountList([])
        setIsLoading(true)
        setErrorOcurred(false)


        const timeoutId = setTimeout(async () => {
            await fetchAccounts()
            clearInterval(timeoutId)
        }, 100);
    }

    const handleWalletCreation = (newAct: CurrencyAccount) => {
        if (accountList.some((al) => newAct.currency === al.currency)) return
        setAccountList([...accountList, newAct])
    }

    React.useEffect(() => {
        isMountedRef.current = true
        fetchAccounts()

        return () => {
            isMountedRef.current = false
        };

    }, [])

    return (
        <>
            <WalletsPage>
                <Header>
                    <img src="wallets.png" alt="Wallets" />
                    {hasAccounts && <NewWallet onClick={() => setNewWalletState(true)}> + Add new wallet </NewWallet>}

                </Header>

                <PageContent hasItems={hasAccounts}>
                    {
                        hasAccounts ?
                            <AccountList>
                                {accountList.map((account) =>
                                    <AccountCard {...account} key={account.id} />
                                )}
                            </AccountList>
                            :
                            <>
                                {isLoading && <Loader size={70} />}
                                {errorOcurred && <ErrorNotification onRetry={handleAccountsFetching} />}
                            </>
                    }
                </PageContent>
            </WalletsPage>

            <Modal isOpen={showNewWalletForm}>
                <NewWalletForm onClose={() => setNewWalletState(false)} onNewWalletCreated={handleWalletCreation} />
            </Modal>
        </>
    )

}

const WalletsPage = styled.div`
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NewWallet = styled.div`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`;

const PageContent = styled.div<{ hasItems: boolean }>`
    margin-top: 12px;
    border-top: 1px solid #D3D5D880;
    padding: 25px 12px 12px;

  ${(props) => !props.hasItems && css`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center`}
`;

const AccountList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    justify-content: center;
`
