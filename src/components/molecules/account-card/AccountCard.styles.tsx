import styled from "styled-components";

import { colors } from "../../../constants";
import {
  Card,
  CircleBg as DefaultCircleBg,
  CurrencyText as DefaultCurrencyText,
  CurrencyAmountText as DefaultCurrencyAmountText,
} from "../../atoms";

export const Container = styled(Card)`
  width: 14rem;
  height: 9rem;
  padding: 1rem;
  display: flex;
  min-width: 10rem;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.BLACK_80_COLOR};
  &::before,
  &::after {
    left: 0;
    bottom: 0;
    z-index: 1;
    content: "";
    width: 10rem;
    height: 12rem;
    position: absolute;
    transform: rotate(30deg) translate(-5px, 30px);
    background: rgba(29, 29, 29, 0.3);
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }
  &::after {
    width: 21.4rem;
    height: 11rem;
    background: rgba(41, 41, 41, 0.3);
    transform: rotate(13deg) translate(-6rem, 2rem);
    clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
  }
`;

export const CurrencyContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  margin-bottom: 1.125rem;
`;

export const CurrencyText = styled(DefaultCurrencyText)`
  z-index: 2;
  margin-left: 0.5rem;
`;

export const CurrencyAmountText = styled(DefaultCurrencyAmountText)`
  z-index: 2;
`;

export const CircleBg = styled(DefaultCircleBg).attrs({
  color: colors.BLACK_40_COLOR,
})`
  z-index: 2;
  right: 1rem;
  bottom: 1rem;
  position: absolute;
`;
