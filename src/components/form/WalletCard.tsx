import styled from "styled-components";

export const WalletCard = ({ accounts }: any) => {
    return (
        <WalletCardContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={accounts.imgURL} alt="currency" width="34px" height="34px" />
                <AccountName>{accounts.name}</AccountName>
            </div>

            <AccountBalance>
                <div>{accounts.balance}</div>
                <div style={{ marginLeft: 4 }}>{accounts.currency}</div>
            </AccountBalance>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <RightArrowButton>
                    <img src='./assets/icons/RightArrow.svg' alt='right arrow icon' />
                </RightArrowButton>
            </div>
        </WalletCardContainer>
    )
}

const WalletCardContainer = styled.div`
    aspect-ratio: 1.75;
    border-radius: 10px;
    padding: 16px;
    background-color: rgba(17, 17, 17, 1);
    background-image: url(../assets/Vector3.svg), url(../assets/Vector4.svg);
    background-repeat: no-repeat;
    box-shadow: 0px 10px 20px 0px rgba(138, 138, 138, 0.5);
    background-position: bottom left;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
`

const AccountName = styled.div`
    margin: 8px;
    width: 50px;
    fontSize: 14px;
    fontWeight: 400;
    color: #9AA5B1;
`

const AccountBalance = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 80%;
    font-size: 16px;
    font-weight: 500;
    color: white;
`

const RightArrowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(48, 48, 48, 1);
    border: none;
`