import "../../index.scss";
export interface AccountListCardProps {
  imgURL?: string;
  name?: string;
  balance?: string;
  currency?: string;
}
function AccountListCard(props: AccountListCardProps) {
  return (
    <div className="account-card">
      <div style={{ padding: 16 }}>
        <div className="account-heading">
          <img className="account-image" src={props.imgURL} />
          <div className="account-title">{props.name}</div>
        </div>
        <div className="account-balance">
          {props.currency == "NGN" ? "₦" : ""} {props.balance}{" "}
          {props.currency == "NGN" ? "" : props.currency}
        </div>
        <div className="account-arrow-section">
          <img className="account-arrow" src={"./arrow.svg"} />
        </div>
      </div>
      <div className="account-vectors">
        <div className="account-vector4">
          <img src={"./Vector4.svg"} />
        </div>

        <div className="account-vector3">
          <img src={"./Vector3.svg"} />
        </div>
      </div>
    </div>
  );
}

export default AccountListCard;
