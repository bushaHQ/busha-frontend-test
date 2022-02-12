import styled from "styled-components";

import { colors } from "../../../constants";
import {
  Icon,
  NetworkErrorRedText as DefaultNetworkErrorRedText,
} from "../../atoms";

export const Container = styled.div`
  display: flex;
  padding: 0.938rem;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.FAINT_RED};
  border: 1px solid ${({ theme }) => theme.colors.LIGHTER_RED};
`;

export const TextandIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NetworkErrorRedText = styled(DefaultNetworkErrorRedText)`
  margin-left: 0.625rem;
`;

export const CloseIcon = styled(Icon).attrs({
  name: "close",
  color: colors.BRIGHT_RED,
})`
  cursor: pointer;
  width: 0.625rem;
  height: 0.625rem;
`;
