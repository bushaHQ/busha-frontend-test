import React from "react";

import { Icon } from "../../atoms";
import { AccountProps } from "./AccountCard.interface";

import {
  CircleBg,
  Container,
  CurrencyText,
  CurrencyContainer,
  CurrencyAmountText,
} from "./AccountCard.styles";

export const AccountCard: React.FC<AccountProps> = ({
  ammount,
  currency,
  accountIcon,
  accountName,
}) => {
  return (
    <Container>
      <CurrencyContainer>
        <img src={accountIcon} alt={accountName} width={34} height={34} />
        <CurrencyText>{accountName}</CurrencyText>
      </CurrencyContainer>
      {accountName === "Naira" ? (
        <CurrencyAmountText>{`₦ 
        ${
          ammount
          //   ?.replace(
          //   /(?=(\d{3})+(?!\d))/g,
          //   ","
          // )
        }`}</CurrencyAmountText>
      ) : (
        <CurrencyAmountText>{`${ammount} ${currency}`}</CurrencyAmountText>
      )}
      <CircleBg>
        <Icon name="right-arrow" />
      </CircleBg>
    </Container>
  );
};
