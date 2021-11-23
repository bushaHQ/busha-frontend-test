import { useCallback, useEffect, useState, FormEvent } from "react";
import styled from "styled-components";
import { NetworkError } from ".";
import { closeIcon, WarningIcon, errorIcon } from "../assets";
import Loader from "./shared/Loader";

interface WalletProps {
    name: string;
    currency: string;
}

interface FlagProps {
    isLoading: boolean;
    isError: boolean;
    isSubmitting: boolean;
    submissionError: boolean
}

interface WalletModalProps {
    closeModal: () => void;
    fetchAccounts: () => void;
}

export function AddWallet(props: WalletModalProps) {

    const [walletList, setWalletList] = useState<WalletProps[]>([]);
    const [selectedWallet, setSelectedWallet] = useState("");

    const [flags, setFlags] = useState<FlagProps>({
        isLoading: true,
        isError: false,
        isSubmitting: false,
        submissionError: false
    });

    const fetchWallets = useCallback(() => {
        setWalletList([]);
        setFlags(prevS => ({
            ...prevS,
            isLoading: true,
            isError: false,
            isSubmitting: false,
            submissionError: false
        }));

        fetch("http://localhost:3090/wallets")
            .then(res => res.json())
            .then(data => setWalletList(data))
            .catch(() => setFlags(prevS => ({ ...prevS, isError: true })))
            .finally(() => setFlags(prevS => ({ ...prevS, isLoading: false })))
    }, []);

    useEffect(() => {
        fetchWallets();

        return () => new AbortController().abort();
    }, [fetchWallets]);

    const handleChange = (e: FormEvent) => {
        let target = e.target as HTMLSelectElement;
        setSelectedWallet(target.value);
    }

    const addNewWallet = (e: FormEvent) => {
        e.preventDefault();
        setFlags(prevS => ({ ...prevS, isSubmitting: true }));

        fetch("http://localhost:3090/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                currency: selectedWallet
            })
        }).then(res => res.json())
            .then((data) => {
                if (Object.entries(data).length) {
                    props.fetchAccounts();
                    props.closeModal();
                } else {
                    setFlags(prevS => ({ ...prevS, submissionError: true }))
                }
            })
            .catch(() => setFlags(prevS => ({ ...prevS, submissionError: true })))
            .finally(() => setFlags(prevS => ({ ...prevS, isSubmitting: false })))
    }

    return (
        <Container>
            {
                (flags.isLoading || flags.isError) &&
                <Image src={closeIcon} alt={""} onClick={props.closeModal} rootClose aria-label="Close button" />
            }

            {
                flags.isLoading ?
                    <CenterContainer>
                        <Loader />
                    </CenterContainer>
                    :
                    flags.isError ?
                        <CenterContainer>
                            <NetworkError tryAgainCallback={fetchWallets} />
                        </CenterContainer>
                        :
                        <ContentContainer>
                            <TitleContainer >
                                <Title>Add new wallet</Title>
                                <Image src={closeIcon} alt={""} onClick={props.closeModal} pointer aria-label="Close button" />
                            </TitleContainer>

                            <Text >The crypto wallet will be created instantly and be available in your list of wallets.</Text>

                            <form onSubmit={addNewWallet}>
                                <FormGroup>
                                    <Text>Select Wallet</Text>
                                    <WalletSelect required value={selectedWallet} onChange={handleChange} role={"combobox"}>
                                        <option value={""} key={Math.random()}>Select</option>
                                        {
                                            walletList.length &&
                                            walletList.map(({ name, currency }) => <option value={currency} key={Math.random()}>{name}</option>)
                                        }
                                    </WalletSelect>
                                </FormGroup>

                                <WarningButton type={"submit"} disabled={flags.isSubmitting}>{flags.isSubmitting ? <Loader size={20} /> : "Create wallet"}</WarningButton>
                            </form>

                            {
                                flags.submissionError &&
                                <Alert>
                                    <Image src={WarningIcon} alt={""} />
                                    <AlertText>Network Error</AlertText>
                                    <Image src={errorIcon} alt={""} danger pointer onClick={() => setFlags(prevs => ({ ...prevs, submissionError: false }))} />
                                </Alert>
                            }
                        </ContentContainer>
            }
        </Container>
    );
}

interface ImageProps {
    pointer?: boolean;
    danger?: boolean;
    rootClose?: boolean;
}

const Container = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
`

const CenterContainer = styled.div`
    display: flex; justify-content: center; align-items: center; height: 100%
`

const ContentContainer = styled.div`
    width: 100%; padding: 24px; padding-top: 74px
`

const TitleContainer = styled.div`
    display: flex; justify-content: space-between; align-items: center 
`

const WarningButton = styled.button`
    background-color: black;
    color: white;
    padding: 18px 54px;
    border: none;
    border-radius: 40px;
    margin-top: 33px;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`

const WalletSelect = styled.select`
    border: 1px solid #CBD2D9;
    border-radius: 5px;
    padding: 16px 24px;
    margin-top: 14px;
    font-weight: 500;
    font-size: 18px;
    color: #3E4C59;
    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 24px) center !important;
    appearance: none !important;
`

const Title = styled.p`
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    margin:0
`

const Text = styled.p`
    margin-bottom: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #3E4C59;
    margin-top: 49px;
`

const Alert = styled.div`
    background: #FFF4F4;
    border: 1px solid #E0B3B2;
    border-radius: 8px;
    padding: 15px 20px;
    margin-top: 49px;
    display: flex;
`

const AlertText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #D72C0D;
    margin: 0;
    margin-left: 14px;
`

const Image = styled.img<ImageProps>`
    cursor: ${props => props.pointer ? "pointer" : "default"};
    display: ${props => props.danger ? "flex" : "block"};
    margin-left: ${props => props.danger ? "auto" : "unset"};
    position: ${props => props.rootClose ? "absolute" : "relative"};
    top: ${props => props.rootClose ? "20px" : "0"};
    right: ${props => props.rootClose ? "20px" : "0"};
`

const FormGroup = styled.div`
    display: flex; flex-direction: column
`