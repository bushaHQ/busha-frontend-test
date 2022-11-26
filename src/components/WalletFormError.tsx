import { Dispatch, SetStateAction } from "react";

export default function WalletFormError(props:{setIsError: Dispatch<SetStateAction<boolean>>}) {

  return (
    <div className="wallet-form-error-container">
      <div>
        <img src="/images/Primary fill.svg" alt="Error" />
        <span>Network error</span>
      </div>

      <img src="/images/icon.svg" alt="close" onClick={() => props.setIsError(false)} />
    </div>
  )
}