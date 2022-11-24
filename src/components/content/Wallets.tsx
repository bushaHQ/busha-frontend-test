import { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonComponent from "../misc/Button";
import ErrorComponent from "../misc/ErrorComponent";
import Loader from "../shared/Loader";
import Modal from "../shared/Modal";
import WalletCardComponent from "./WalletCard";
import Close from '../../assets/img/close.png';
import ErrorMessageComponent from "../misc/ErrorMessage";


const WalletsContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [wallets, setWallets] = useState([]);
    const [isError, setIsError] = useState(false);

    const [isModalLoading, setIsModalLoading] = useState(true);
    const [otherWallets, setOtherWallets] = useState([]);
    const [isModalError, setIsModalError] = useState(false);

    const [addCurrency, setAddCurrency] = useState('');
    const [isAddLoading, setIsAddLoading] = useState(false);
    const [isAddError, setIsAddError] = useState(false);
    const [addErrorMessage, setAddErrorMessage] = useState('');

    const SERVER_URL = "http://localhost:3090";

    useEffect(() => {
        fetchWallets();
    }, []);

    useEffect(() => {
        if(isModalOpen === true){
            fetchOtherWallets();
        }
    }, [isModalOpen]);

    const fetchWallets = async () => {
        setIsLoading(true);
        fetch(SERVER_URL+'/accounts', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            setWallets(json);
            setIsLoading(false);
            setIsError(false);
        }).catch(error => {
            //console.log(error);
            setIsLoading(false);
            setIsError(true);
        })
    }

    const fetchOtherWallets = () => {
        setIsModalLoading(true);
        fetch(SERVER_URL+'/wallets', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            setOtherWallets(json);
            setIsModalLoading(false);
            setIsModalError(false);
        }).catch(error => {
            //console.log(error);
            setIsModalLoading(false);
            setIsModalError(true);
        })
    }

    const createNewWallet = () => {
        if(addCurrency === ""){
            setIsAddError(true);
            setIsAddLoading(false);
            setAddErrorMessage("Currency can't be empty");
        } else {
            setIsAddLoading(true);
            const data = {"currency": addCurrency};
            fetch(SERVER_URL+'/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                setIsAddLoading(false);
                setIsAddError(false);
                fetchWallets();
                setIsModalOpen(false);
                setAddCurrency("");
            }).catch(error => {
                //console.log(error);
                setAddErrorMessage("Network Error");
                setIsAddLoading(false);
                setIsAddError(true);
            })
        }
    }
    return (
        <ContentContainer className="content">
            <HeadingRow>
                <HeadingRowLeft>
                    Wallets
                </HeadingRowLeft>
                <HeadingRowRight>
                    { !isLoading && <AddWalletModalButton onClick={() => setIsModalOpen(true)}>+ Add new wallet</AddWalletModalButton>}
                </HeadingRowRight>
            </HeadingRow>
            {
                isLoading ?
                    <CenterWrapper>
                        <LoadingWrapper>
                            <Loader size={83.37} />
                        </LoadingWrapper>
                    </CenterWrapper>
                :
                    <>
                        {
                            isError ?
                            <CenterWrapper>
                                <ErrorComponent />
                                <ButtonComponent text="Try Again" onClick={() => fetchWallets()} />
                            </CenterWrapper>
                            :
                            <>
                                <HorizontalLine />
                                <WalletsWrapper className="wallet-wrapper">
                                    {
                                        wallets.map((item) => (
                                            <WalletCardComponent 
                                                key={item['id']} 
                                                balance={item['balance']}
                                                currency={item['currency']}
                                                imgURL={item['imgURL']}
                                                name={item['name']}
                                            />
                                        ))
                                    }
                                </WalletsWrapper>
                            </>
                        }
                    </>
            }
            <Modal isOpen={isModalOpen}>
                <ModalWrapper>
                    {
                        isModalLoading ?
                        <CenterModalWrapper>
                            <br /><br /><br />
                            <LoadingWrapper>
                                <Loader size={83.37} />
                            </LoadingWrapper>
                        </CenterModalWrapper>
                        :
                        <>
                            {
                            isModalError ?
                            <CenterModalWrapper>
                                <ErrorComponent />
                                <ButtonComponent text="Try Again" onClick={() => fetchOtherWallets()} />
                            </CenterModalWrapper>
                            :
                            <ModalFormWrapper>
                                <ModalHeaderRow>
                                    <ModalHeaderLeftRow>Add new wallet</ModalHeaderLeftRow>
                                    <ModalHeaderRightRow>
                                        <CloseButton onClick={() => setIsModalOpen(false)}><img src={Close} alt="X" /></CloseButton>
                                    </ModalHeaderRightRow>
                                </ModalHeaderRow>
                                <Description>The crypto wallet will be created instantly and be available in your list of wallets.</Description>
                                <InputLabel>Select wallet</InputLabel>
                                <select onChange={(e) => setAddCurrency(e.target.value)}>
                                    <option value="">Select currency</option>
                                    {
                                        otherWallets.map((item, index) => (
                                            <option key={index} value={item['currency']}>{item['currency']}</option>
                                        ))
                                    }
                                </select>
                                <br />
                                <br />
                                <ButtonWrapper>
                                    <ButtonComponent text="Create wallet" onClick={() => createNewWallet()} loading={isAddLoading} />
                                </ButtonWrapper>
                                <br />
                                <br />
                                {isAddError && <ErrorMessageComponent text={addErrorMessage} onClick={() => setIsAddError(false)} />}
                            </ModalFormWrapper>
                            }
                        </>
                    }
                    
                </ModalWrapper>
            </Modal>
        </ContentContainer>
    );
}

export default WalletsContent;

const ContentContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 75%;
    padding-left: 50px;
    box-sizing: border-box;
    border: 0px solid red;
`;

const LoadingWrapper = styled.div`
    width: 87px;
    margin: 0 auto;
`;

const HeadingRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 0px;
`;

const HorizontalLine = styled.div`
    border-bottom: 1px solid rgba(211, 213, 216, 0.5);
    margin-top: 10px;
    margin-bottom: 10px;
`;

const HeadingRowLeft = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: row;
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #000000;
    border: 0px solid red;
`;

const HeadingRowRight = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    
    border: 0px solid red;
`;

const AddWalletModalButton = styled.button`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: right;
    background-color: transparent;
    color: #000000;
    border: 0;
    cursor: pointer;
`;

const WalletsWrapper = styled.button`
    position: relative;
    top: 14px;
    left: 0;
    width: 100%;
    height: auto;
    border: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ModalWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 0px;
    padding-top: 0px;
    box-sizing: border-box;
`;
const ModalHeaderRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;
const ModalHeaderLeftRow = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
`;
const ModalHeaderRightRow = styled.div`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
`;

const CloseButton = styled.button`
    background-color: transparent;
    color: #000000;
    border: 0;
    cursor: pointer;
`;
const Description = styled.div`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #3E4C59;
    padding-top: 50px;
`;
const InputLabel = styled.div`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3E4C59;
    padding-top: 40px;
`;
const ButtonWrapper = styled.div`
    text-align: center;
    width: 100%;
`;
const CenterWrapper = styled.div`
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    border: 0px solid red;
`;
const CenterModalWrapper = styled.div`
    text-align: center;
    width: 100%;
    min-height: 50vh;
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    box-sizing: border-box;
    border: 0px solid red;
`;
const ModalFormWrapper = styled.div`
    padding: 50px 25px;
    box-sizing: border-box;
    border: 0px solid red;
`;