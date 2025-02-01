import styled from "styled-components";
import { IWallet } from "./Main";

const Wrapper = styled.div`
  background-color: #111111;
  box-shadow: 0px 10px 20px 0px #8a8a8a80;
  border-radius: 10px;
  height: 150px;
  width: 100%;
`;

const InnerWrapper = styled.div`
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CurrencyIconWrapper = styled.div`
  width: 34px;
`;

const CurrencyIcon = styled.img`
  width: 100%;
`;

const CurrencyText = styled.h2`
  color: #9aa5b1;
  font-size: 14px;
  font-weight: 400;
`;

const Balance = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MoreIcon = styled.img`
  width: 100%;
  max-width: 32px;
`;

const Card = ({ data }: { data: IWallet }) => {
  // const formatNumberWithCommas = (number: number) => {
  //   const [integerPart, decimalPart] = number.toString().split(".");
  //   const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return decimalPart
  //     ? `${formattedInteger}.${decimalPart}`
  //     : formattedInteger;
  // };
  return (
    <Wrapper>
      <InnerWrapper>
        <TopContainer>
          <CurrencyWrapper>
            <CurrencyIconWrapper>
              <CurrencyIcon
                src={`${data?.name?.toLowerCase()}${
                  [
                    "Stellar",
                    "SureRemit",
                    "Tether",
                    "Tron",
                    "Ripple",
                    "Dogecoin",
                    "TRON",
                  ].includes(data?.name)
                    ? ".png"
                    : ".svg"
                }`}
                alt={data?.name}
              />
            </CurrencyIconWrapper>
            <CurrencyText>{data?.name}</CurrencyText>
          </CurrencyWrapper>
          <Balance>
            {data?.type === "fiat" && <span>{data?.currency} </span>}
            <span>{data?.balance}</span>
            {data?.type !== "fiat" && <span> {data?.currency} </span>}
          </Balance>
        </TopContainer>
        <BottomContainer>
          <MoreIcon src="more.svg" alt="more" />
        </BottomContainer>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Card;
