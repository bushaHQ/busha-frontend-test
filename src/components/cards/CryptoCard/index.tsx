import Image from "components/others/Image";
import ArrowSvg from "assets/icons/arrow-right.svg";
import { AccountType } from "types/account";
import { mapIconsToAssets } from "utils/mapIconToAsset";
import { CryptoCardWrapper } from "./CryptoCard.style";

export default function CryptoCard({
  name,
  imgURL,
  balance,
  type,
  currency,
}: AccountType) {
  return (
    <CryptoCardWrapper>
      <div className="wallet-asset">
        {/* The image links provided are broken */}
        <Image
          src={
            mapIconsToAssets[currency as keyof typeof mapIconsToAssets] ||
            imgURL
          }
          alt="crypto"
        />
        <h3 className="wallet-asset-name">{name}</h3>
      </div>
      <p className="wallet-balance">
        {type === "fiat" && currency === "NGN" && "₦"} <span>{balance}</span>
        {type === "digital" && ` ${currency}`}
      </p>

      <button type="button" className="nav-arrow">
        <Image src={ArrowSvg} alt="arrow" />
      </button>
    </CryptoCardWrapper>
  );
}
