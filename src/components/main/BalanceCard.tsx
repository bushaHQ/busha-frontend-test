import styled from "styled-components";
import { ReactComponent as CardShape1 } from "../../assets/svg/card-vector-1.svg";
import { ReactComponent as CardShape2 } from "../../assets/svg/card-vector-2.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { CardProps } from "../types";
// import { currencyFormatter } from "../../utils/helperFunctions"

//Styled component generator
const Wrapper = styled.div`
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  .currency {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 14px;
    color: #9AA5B1;
    p {
      color: #9AA5B1;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      word-wrap: break-word;
    }
  }
  .logo {
    max-width: 34px;
    max-height: 34px;
  }
  .arrow {
    position: relative;
    z-index: 1;
    position: absolute;
    right: 16px;
    bottom: 16px;
    cursor: pointer;
  }
  .posLeft {
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 100%;
    z-index: 0;
  }
  .posRight {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 100%;
    z-index: 0;
  }
  .balance {
    display: flex;
    gap: 8px;
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 12px 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    word-wrap: break-word;
  }
  @media (max-width: 400px) {
    .arrow {
      right: 7.5px;
      top: 35%;
    }
    .balance {
      padding-top: 15px;
    }
}
`;

const BalanceCard = ({ imageUrl, currency, balance, name }: CardProps): JSX.Element => {

  // let displayBalance = currencyFormatter(balance)

  return (
    <Wrapper>
      <div className="currency">
        <img src={imageUrl} alt="Currency Logo" className="logo" />
        <div>{name}</div>
      </div>
      <div className="balance">
        <div>{currency === "NGN" ? "₦" : currency || ""}</div>
        <div>{` ${balance || "0"}`}</div>
      </div>
      <Arrow className="arrow" />
      <CardShape1 className="posLeft" />
      <CardShape2 className="posRight" />
    </Wrapper>
  );
};

export default BalanceCard;
