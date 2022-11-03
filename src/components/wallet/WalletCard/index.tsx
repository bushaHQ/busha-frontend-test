import styled, { keyframes } from "styled-components";
import CardArrow from "../../../assets/images/card-arrow.svg";
import BG1 from "../../../assets/images/card-bg-1.png";
import BG2 from "../../../assets/images/card-bg-2.png";
import { WalletCardProps } from "../../../types";

export default function WalletCard(
  props: React.PropsWithChildren<WalletCardProps>
) {
  const { cardData } = props;
  return (
    <WalletCardContainer>
      <WalletCardHeader>
        <img src={cardData.imgURL} alt={cardData.name} />
        <div>{cardData.name}</div>
      </WalletCardHeader>
      <WalletCardContent>
        <div>{cardData.balance}</div>
        <div>{cardData.currency}</div>
      </WalletCardContent>
      <WalletCardFooter>
        <span>
          <img src={CardArrow} alt="" />
        </span>
      </WalletCardFooter>
    </WalletCardContainer>
  );
}

const cardKeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
}

100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const WalletCardContainer = styled.div`
  text-decoration: none;
  background-color: rgb(17, 17, 17);
  background-image: url(${BG2}), url(${BG1});
  background-position: left bottom, center bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 50% 85%, contain;
  box-shadow: 0px 10px 20px #8a8a8a80;
  border-radius: 10px;
  padding: 16px;
  animation: 0.5s ease-in-out 0s 1 normal ${cardKeyFrames};
`;

const WalletCardHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 18px;

  & > img {
    width: 34px;
    height: 34px;
    border-radius: 30px;
    margin-right: 10px;
  }

  & > div {
    color: rgb(154, 165, 177);
  }
`;

const WalletCardContent = styled.div`
  color: rgb(255, 255, 255);
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  gap: 5px;
`;

const WalletCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  & > span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: rgb(48, 48, 48);
    width: 32px;
    height: 32px;
    border-radius: 30px;
  }
`;
