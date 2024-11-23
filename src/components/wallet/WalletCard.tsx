import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  ReactEventHandler,
} from "react";
import RightAngleIcon from "../icons/rightAngleIcon";
import { IWallet } from "./types/IWallet.interface";
import PropTypes from "prop-types";
import accounts from "../../../db/accounts";
import Avatar from "./Avatar";
import Wallet from "./wallet.class";

export type WalletCardProps = IWallet;
const formatCurrency = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    // currency
  });
  let result;
  try {
    result = formatter.format(amount);
  } catch (error: any) {
    return `${+amount.toLocaleString()} ${currency}`;
  }
  return currency + " " + result;
};

const WalletCard: React.FC<WalletCardProps> = (account) => {
  const [fallbackImg, setFallbackImg] = useState(false);
  const data = new Wallet(account);
  const handleImageError = (e: ReactEventHandler) => {
    console.log({ e });
    setFallbackImg(true);
  };
  return (
    <>
      <div className="card" id={account?.id}>
        <div className="w-full flex justify-start">
          {/* <img
            className="h-10 w-10 rounded-full"
            src={imgURL}
            alt="user-avatar"
          />
          <Avatar name={name} color={'#fff'} />
          {name}
           */}
          <div className="currency-avatar" style={{ backgroundColor: data?.custom?.color }} >
            <img
              className="h-10 w-10 rounded-full"
              src={data?.custom?.icon || account?.imgURL}
              alt="user-avatar"
              onError={(e) => handleImageError}
            />
          </div>
          {fallbackImg ? <Avatar name={account.name} color={"#fff"} /> : null}
          {account.name}
        </div>
        <div className="w-full flex justify-start">
          <span className="amount" title="accounts.balance">
            {formatCurrency(+account.balance, account.currency)}
          </span>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="rounded-full card-arrow items-center">
            <button className="btn outline">
              <RightAngleIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// WalletCard.propTypes = {
//   username: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };

export default WalletCard;
