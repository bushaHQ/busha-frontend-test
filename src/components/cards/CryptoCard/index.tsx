import React from "react";
import Image from "../../shared/Image";
import ArrowSvg from "../../../assets/icons/arrow-right.svg";
import { CryptoCardWrapper } from "./CryptoCard.style";

export default function CryptoCard() {
  return (
    <CryptoCardWrapper>
      <div className="wallet-asset">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" rx="17" fill="#05A357" />
          <g clip-path="url(#clip0_5591_80)">
            <path
              d="M23.136 17.2933H21.3401V16.7067H23.136C23.7945 16.7067 24.3333 16.1787 24.3333 15.5333C24.3333 14.888 23.7945 14.36 23.136 14.36H21.3401V10.84C21.3401 10.1947 20.8013 9.66666 20.1428 9.66666C19.4843 9.66666 18.9455 10.1947 18.9455 10.84V14.36H17.0299L14.9347 10.312C14.6952 9.84266 14.0966 9.54932 13.5578 9.72532C13.019 9.84266 12.6598 10.312 12.6598 10.84V14.36H10.8639C10.2054 14.36 9.66663 14.888 9.66663 15.5333C9.66663 16.1787 10.2054 16.7067 10.8639 16.7067H12.6598V17.2933H10.8639C10.2054 17.2933 9.66663 17.8213 9.66663 18.4667C9.66663 19.112 10.2054 19.64 10.8639 19.64H12.6598V23.16C12.6598 23.8053 13.1986 24.3333 13.8571 24.3333C14.5156 24.3333 15.0544 23.8053 15.0544 23.16V19.64H16.97L19.0653 23.688C19.2449 24.0987 19.6639 24.3333 20.1428 24.3333C20.2625 24.3333 20.3224 24.3333 20.4421 24.2747C20.9809 24.1573 21.3401 23.688 21.3401 23.16V19.64H23.136C23.7945 19.64 24.3333 19.112 24.3333 18.4667C24.3333 17.8213 23.7945 17.2933 23.136 17.2933ZM18.9455 16.7067V17.2933H18.4666L18.2272 16.7067H18.9455ZM15.0544 17.2933V16.7067H15.5333L15.8326 17.2347H15.0544V17.2933Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5591_80">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(9 9)"
              />
            </clipPath>
          </defs>
        </svg>

        <h3 className="wallet-asset-name">Naira</h3>
      </div>
      <p className="wallet-balance">₦ 105,160,076.51</p>

      <button type="button" className="nav-arrow">
        <Image src={ArrowSvg} alt="arrow" />
      </button>
    </CryptoCardWrapper>
  );
}
