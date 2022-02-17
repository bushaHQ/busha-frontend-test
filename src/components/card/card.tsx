import styled from "styled-components";
import { ReactComponent as ShapeOne } from "../../assets/svg/shapeOne.svg";
import { ReactComponent as ShapeTwo } from "../../assets/svg/shapeTwo.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

interface ICard {
  imageUrl: string;
  currency: string;
  balance: string;
}

const Wrapper = styled.div`
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 150px;
  .shapeOne {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .shapeTwo {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .arrow {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
  .currency {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    color: #ffffff;
  }
  .balance {
    color: #ffffff;
    padding: 12px 14px;
  }
`;

const Card = ({ imageUrl, currency, balance }: ICard): JSX.Element => {
  const showBalance = (currency: string) => {
    switch (currency.toLowerCase()) {
      case "naira":
        return <>&#8358; {balance}</>;
      case "bitcoin":
        return `${balance} BTC`;
      case "ethereum":
        return `${balance} ETH`;
      default:
        return "";
    }
  };
  return (
    <Wrapper>
      <ShapeOne className="shapeOne" />
      <ShapeTwo className="shapeTwo" />
      <Arrow className="arrow" />
      <div className="currency">
        <img src={imageUrl} alt="currency" />
        <span>{currency}</span>
      </div>
      <div className="balance">{showBalance(currency)}</div>
    </Wrapper>
  );
};

export default Card;
