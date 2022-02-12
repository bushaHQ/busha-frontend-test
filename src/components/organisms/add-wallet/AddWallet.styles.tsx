import styled from "styled-components";

import {
  Icon,
  Select as DefaultSelect,
  Button as DefaultButton,
  SelectItemText as DefaultSelectItemText,
  AddWalletDescText as DefaultAddWalletDescText,
  AddWalletBiggerText as DefaultAddWalletBiggerText,
} from "../../atoms";

export const Container = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 4.625rem 1.5rem 1.5rem 1.5rem;
`;

export const NoDataContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Close = styled(Icon).attrs({ name: "close" })`
  top: 4.625rem;
  right: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
`;

export const AddWalletBiggerText = styled(DefaultAddWalletBiggerText)`
  margin-bottom: 3.063rem;
`;

export const AddWalletDescText = styled(DefaultAddWalletDescText)`
  margin-bottom: 2.688rem;
`;

export const SelectItemText = styled(DefaultSelectItemText)`
  margin-bottom: 0.875rem;
`;

export const Select = styled(DefaultSelect)`
  margin-bottom: 1.688rem;
`;

export const Button = styled(DefaultButton)`
  margin: 0 auto 2.813rem auto;
`;
