import React from "react";
import styled from "styled-components";
import { formatNumber } from "../utils/helper";
import nextIcon from "../assets/img/next.svg";
const Card = (props: { account: AcountType }) => {
  const { account } = props;
  return (
    <CardWrapper>
      <div className="currency">
        <span>
          <img src={account.imgURL} alt="currency" />
        </span>
        <p>{account.currency}</p>
      </div>
      <div className="amount">
        <p className="text-light">
          {formatNumber(parseFloat(account.balance)) || "0.00"}{" "}
          {account.currency}
        </p>
      </div>
      <img src={nextIcon} alt="next" />
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  width: 240px;
  min-height: 150px;
  height: 150px;
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  padding: 10px;
  .currency {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      font-weight: 800;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      img {
        width: 36px;
      }
    }
    p {
      padding: 0;
      font-weight: 500;
      font-size: 14px;
      margin: 0;
      color: #3e4c59;
      font-style: normal;
    }
  }
  .amount {
    margin-top: 20px;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      /* identical to box height, or 100% */

      /* white */

      color: #ffffff;
    }
  }
  > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 150px;
    width: 100%;
    margin-right: 0;
  }
`;
