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
  accountIcon,
  accountName,
  ammount,
}) => {
  return (
    <Container>
      <CurrencyContainer>
        <img src={accountIcon} alt={accountName} width={34} height={34} />
        <CurrencyText>{accountName}</CurrencyText>
      </CurrencyContainer>
      <CurrencyAmountText>{ammount}</CurrencyAmountText>
      <CircleBg>
        <Icon name="right-arrow" />
      </CircleBg>
    </Container>
  );
};
