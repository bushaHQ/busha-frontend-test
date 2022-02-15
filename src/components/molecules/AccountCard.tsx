import styled from "styled-components";
import CaretRight from "../atoms/vectors/CaretRight";

const AccountCardStyle = styled.div`
  border-radius: 10px;
  background-color: #111111;
  padding: 18px;
  box-shadow: 0px 10px 10px rgba(138, 138, 138, 0.5);

  .card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 21px;

    .account-image {
      height: 34px;
      width: 34px;
      border-radius: 30px;
      margin-right: 8px;
    }

    .account-name {
      color: #9aa5b1;
      font-size: 14px;
    }
  }

  .card-body {
    margin-bottom: 18px;
    .account-value {
      font-weight: 500;
      color: white;
      font-size: 16px;
    }
  }

  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
`;
interface Props {
  name: string;
  currency: string;
  imgURL: string;
  balance: string;
  type: string;
}
const AccountCard = ({ name, currency, imgURL, balance, type }: Props) => {
  return (
    <AccountCardStyle>
      <div className="card-header">
        <img src={imgURL} className="account-image" alt="" />
        <p className="account-name">{name}</p>
      </div>

      <div className="card-body">
        <p className="account-value">
          <span>{type === "fiat" && currency}</span> <span>{balance}</span>
          <span> </span>
          <span>{type === "digital" && currency}</span>
        </p>
      </div>

      <div className="card-footer">
        <CaretRight />
      </div>
    </AccountCardStyle>
  );
};

export default AccountCard;
