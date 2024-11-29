import * as React from "react";
import styled from 'styled-components';

import Loader from "./Loader";
import ErrorNotification from "./ErrorNotification";
import BaseButton from './Button'
import { CurrencyAccount } from "./AccountCard";

import { baseURL } from '../../utils/constants'

export interface NewWalletFormProps {
    onClose: () => void;
    onNewWalletCreated: (newAccount: CurrencyAccount) => void
}

export interface Wallet {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
}

export default function NewWalletForm(props: React.PropsWithChildren<NewWalletFormProps>) {
    const { onClose, onNewWalletCreated } = props;

    const [isFetching, setIsFetching] = React.useState(true)
    const [errorFetching, setErrorFetching] = React.useState(false)

    const [isCreating, setIsCreating] = React.useState(false)
    const [errorCreating, setErrorCreating] = React.useState(false)

    const [walletList, setWalletList] = React.useState<Wallet[]>([])
    const [selectedWallet, setSelectedWallet] = React.useState('')

    const isReady = React.useMemo(() => !isFetching && !errorFetching, [isFetching, errorFetching])
    const isMountedRef = React.useRef(true);



    const fetchWallets = async () => {
        const controller = new AbortController();

        try {
            const response = await fetch(`${baseURL}/wallets`, { signal: controller.signal });
            if (!isMountedRef.current) return;

            if (!response.ok) {
                setIsFetching(false)
                setErrorFetching(true)
                return
            }

            const wallets: Wallet[] = await response.json()
            if (!isMountedRef.current) return;

            setWalletList(wallets)
            setErrorFetching(false)
            setIsFetching(false)


        } catch (error: any) {
            if (!isMountedRef.current) return;

            console.log('Error fething wallets: ', error)
            setIsFetching(false)
            setErrorFetching(true)
        }

    }

    const handleWalletsFetching = () => {
        setIsFetching(true)
        setErrorFetching(false)

        const timeoutId = setTimeout(async () => {
            await fetchWallets()
            clearTimeout(timeoutId)
        }, 1000);
    }

    const handleWalletCreation = () => {
        if (!selectedWallet) return

        setIsCreating(true)
        setErrorCreating(false)

        const timeoutId = setTimeout(async () => {
            await createWallet()
            clearTimeout(timeoutId)
        }, 500);
    }

    const createWallet = async () => {
        try {
            const controller = new AbortController();

            const data = { currency: selectedWallet }
            const response = await fetch(`${baseURL}/accounts`, {
                method: 'POST', body: JSON.stringify(data),
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json'
                },

            });

            if (!isMountedRef.current) return;
            if (!response.ok) {
                setIsCreating(false)
                setErrorCreating(true)
                return
            }

            let newAccount: CurrencyAccount = await response.json()
            newAccount = {
                ...newAccount,
                name: walletList.find((w) => w.currency === selectedWallet)?.name as string,
                balance: '0',
                type: 'digital'
            }

            onNewWalletCreated(newAccount)
            setIsCreating(false)
            setErrorCreating(false)
            onClose()


        } catch (error: any) {
            if (!isMountedRef.current) return;

            console.log('Error creating wallet: ', error)
            setIsCreating(false)
            setErrorCreating(true)
        }
    }

    React.useEffect(() => {
        isMountedRef.current = true;
        fetchWallets()

        return () => {
            isMountedRef.current = false;
        };
    }, [])

    return (
        <NewForm>
            <Header>
                <Title> Add new wallet </Title>
                <CloseButton aria-label="Close button" onClick={onClose}>
                    <img src="close.svg" alt="Close" />
                </CloseButton>
            </Header>

            {isReady ?
                <>
                    <FormInfo>
                        The crypto wallet will be created instantly and be available in your list of wallets.
                    </FormInfo>

                    <FormContent>
                        <SelectWrapper>
                            <Label htmlFor="wallet-select">Select wallet</Label>
                            <Select id="wallet-select" name="wallet" disabled={isCreating} onChange={(e) => setSelectedWallet(e.target.value)}>
                                <option value='' key='1'> Select wallet </option>
                                {walletList.map(({ name, currency }) =>
                                    <option value={currency} key={name}> {name} </option>
                                )}
                            </Select>
                            <DropdownArrow />
                        </SelectWrapper>

                        <ButtonWrapper>
                            <BaseButton onClick={handleWalletCreation} disabled={isCreating}>
                                {isCreating ? <Loader size={20} /> : 'Create wallet'}
                            </BaseButton>
                        </ButtonWrapper>


                        {errorCreating && <ErrorNotification display="block" errorText='Network error' onClose={() => setErrorCreating(false)} />}
                    </FormContent>
                </>
                :
                <>
                    <LoaderWrapper>
                        {isFetching && <Loader />}
                        {errorFetching && <ErrorNotification onRetry={handleWalletsFetching} />}
                    </LoaderWrapper>
                </>
            }


        </NewForm>
    );
};


const NewForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #FFFFFF;
    height: 75%;
`;

const Header = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 0;
`;

const CloseButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
`;

const LoaderWrapper = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FormInfo = styled.p`
    font-size: 18px;
    color: #3e4c59;
    margin: 0 0 40px;
`

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #3e4c59;
`;

const Label = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
`;

const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`;

const Select = styled.select`
    width: 100%;
    height: 64px;
    margin-top: 8px;
    padding: 10px 12px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    background-color: #fff;
    border: 1px solid #CBD2D9;
    border-radius: 8px;
    appearance: none;
    outline: none;

    &:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
    }
`;

const DropdownArrow = styled.div`
    position: absolute;
    top: 50%;
    right: 16px;
    pointer-events: none;
    width: 12px;
    height: 12px;
    border: solid #6b7280; 
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`
