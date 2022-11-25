import styled from "styled-components";
import Chevron from '../../assets/img/right-arrow.png';

const WalletCardComponent = (props: any) => {
    const { currency, balance, imgURL, name } = props;
    //console.log(props)
    return (
        <CardContainer className="wallet-card">
            <CardCurrencyRow>
                <CurrencyImage><img src={imgURL} alt={currency} height="34px" /></CurrencyImage>
                <CurrencyTittle>{name}</CurrencyTittle>
            </CardCurrencyRow>
            <CardAmountRow>{balance} {currency}</CardAmountRow>
            <CardButtonRow>
                <CardButton><img src={Chevron} alt=">" /></CardButton>
            </CardButtonRow>
        </CardContainer>
    );
}

export default WalletCardComponent;

const CardContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 150px;
    width: 30%;
    box-sizing: border-box;
    background: #111111;
    box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
    border-radius: 10px;
    margin-left: 1.5%;
    margin-right: 1.5%;
    margin-bottom: 25px;
`;

const CardCurrencyRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    border: 0px solid red;
`;

const CurrencyImage = styled.div`
    height: 50px;
    width: auto;
    padding-top: 16px;
    box-sizing: border-box;
`;

const CurrencyTittle = styled.div`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 66px;
    color: #9AA5B1;
    padding-left: 8px;
`;

const CardAmountRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    color: #FFFFFF;
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;
    border: 0px solid red;
`;

const CardButtonRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 2px;
    padding-left: 16px;
    padding-right: 16px;
    border: 0px solid red;
`;

const CardButton = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    padding-top: 6px;
    box-sizing: border-box;
    background: #303030;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
`;