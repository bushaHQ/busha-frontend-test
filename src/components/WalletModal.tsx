import { useContext, useState } from "react";
import styled from "styled-components";
import { WalletsContext } from "../context/walletContext";
import { Close } from "./Close";
import Modal from "./shared/Modal";
import Loader from "../components/shared/Loader";
import { AccountType, WalletType } from "../types";

const ModalContainer = styled.div`
    padding: 74px 24px;
`;

const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ModalTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

const ModalBody = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #3E4C59;
`;

const ModalField = styled.div`
    margin-top: 25px;
    margin-bottom: 27px;
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const Fieldlabel = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: #3E4C59;
`;

const SelectField = styled.select`
    margin-top: 14px;
    height: 64px;
    border-radius: 5px;
    border: 1px solid #CBD2D9;
    font-size: 16px;
    padding: 0px 24.7px;
    appearance: none;
    background-image: url('/chevron.svg');
    background-repeat: no-repeat;
    background-position: right 24.7px top 50%;
`;

const AddButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    border-radius: 40px;
    cursor: pointer;
    padding: 18px 54px;
    width: 222px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        padding: 14px 34px;
        width: 180px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #3E4C59;
    margin-top: 26px;
`;

const Button = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    border-radius: 40px;
    cursor: pointer;
    padding: 18px 54px;
    margin-top: 42px;

    @media (max-width: 480px) {
        margin-top: 22px;
        padding: 14px 34px;
    }
`;

const SelectOption = styled.option`
    font-size: 16px;
    padding: 0px 24.7px;
`;

const ErrorContainer = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF4F4;
    border: 1px solid #E0B3B2;
    margin-top: 45px;
    border-radius: 8px;
    padding-left: 20px;
`;

const ErrorBody = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const ErrorIcon = styled.img`

`;

const ErrorText = styled.p`
    color: #D72C0D;
    font-size: 16px;
    font-weight: 500;
`;

const CloseIcon = styled.img`
    width: 10px;
    height: 10px;
    stroke: #D72C0D;
    margin-right: 20px;
`;

export const WalletModal = ({ onClose, isOpen, updateAccounts }: { onClose: () => void, isOpen: boolean, updateAccounts: (account: AccountType) => void }) => {
    const {
        wallets: { data, loading, error: errorMessage, refetch, saveWallet },
        wallet: { error, clearError, setError }}
    = useContext(WalletsContext);

    const [selectedWallet, setSelectedWallet] = useState('');
    const [savingWallet, setSavingWallet] = useState(false)

    const handleSelect = (value: string) => {
        setSelectedWallet(value);
      };

    const submitWallet = async () => {
        try {
            setSavingWallet(true)
            await saveWallet({ currency: selectedWallet }, (data) => {
                setSelectedWallet('')
                onClose()
                updateAccounts(data)
            })
        } catch (err) {
            setError('Network Error');
        }
    }

    return (
        <Modal isOpen={isOpen}>
            {errorMessage ?
                <Container>
                    <img src="/error.svg" alt="error" />
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <Button onClick={() => refetch()}>Try Again</Button>
                </Container> :
                loading ? 
                    <Container>
                        <Loader size={83.37} width={8} />
                    </Container> : 
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>Add new wallet</ModalTitle>
                            <Close onClose={onClose} />
                        </ModalHeader>
        
                        <ModalBody>
                            <ModalDescription>The crypto wallet will be created instantly and be available in your list of wallets.</ModalDescription>
        
                            <ModalField>
                                <Fieldlabel htmlFor="wallet">Select wallet</Fieldlabel>
                                <SelectField id="wallet" value={selectedWallet} onChange={(evt) => handleSelect(evt.target.value)}>
                                    <SelectOption>Select an option</SelectOption>
                                    {data.map((wallet: WalletType) => <SelectOption key={wallet.name} value={wallet.currency}>{wallet.name}</SelectOption>)}
                                </SelectField>
                            </ModalField>
        
                            <AddButton onClick={submitWallet}>
                                {savingWallet ? <Loader size={20} /> : 'Create wallet'}
                            </AddButton>

                            {error && <ErrorContainer>
                                <ErrorBody>
                                    <ErrorIcon src="error-diamond.svg" alt="error" />
                                    <ErrorText>{error}</ErrorText>
                                </ErrorBody>

                                <CloseIcon onClick={clearError} src="/close-red.svg" alt="close" />
                            </ErrorContainer>}
                        </ModalBody>
                    </ModalContainer>
            }
        </Modal>
    )
}
