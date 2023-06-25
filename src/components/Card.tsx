import styled from "styled-components";
import { Accountwallet } from "../type/AccountWalletType";

import rightarrow from "../asset/image/rightarrow.svg";
import bg1 from "../asset/image/bg1.svg";
import bg2 from "../asset/image/bg2.svg";

interface CardProps {
  account: Accountwallet;
}

export const Card = ({ account }: CardProps) => {
  return (
    <div>
      <CardWrapper key={account.id}>
        <Header>
          <img src={account.imgURL} alt="" />
          <p>{account.name}</p>
        </Header>
        <Balance>
          <p>
            {account.currency === "NGN" && "₦ "}
            {account.balance}
            {account.currency !== "NGN" && <span>{account.currency}</span>}
          </p>
        </Balance>
        <Footer>
          <div>
            <img src={rightarrow} alt="" />
          </div>
        </Footer>
      </CardWrapper>
    </div>
  );
};

const CardWrapper = styled.div`
  width: 207px;
  padding: 16px;
  border-radius: 10px;
  background: #111;
  background-image: url(${bg1}), url(${bg2});
  background-position: left bottom, center bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 50% 85%, contain;
  box-shadow: 0px 10px 20px 0px rgba(138, 138, 138, 0.5);
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & img {
    width: 34px;
    height: 34px;
  }

  & p {
    color: #9aa5b1;
    font-size: 14px;
    line-height: 14px;
    margin-left: 8px;
  }
`;

const Balance = styled.div`
  margin: 18px 0;

  & p {
    color: #fff;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 16px;
  }

  & span {
    margin-left: 5px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  & div {
    padding: 6px;
    width: 32px;
    height: 32px;
    border-radius: 30px;
    background: #303030;
  }
`;
