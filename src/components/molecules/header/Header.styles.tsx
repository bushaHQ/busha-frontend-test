import styled from "styled-components";

import { AddWalletText as DefaultAddWalletText } from "../../atoms";

export const Container = styled.div<{ noData: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  border-bottom: ${({ theme, noData }) =>
    noData ? `none` : `1px solid ${theme.colors.GREY_20_COLOR}`};
`;

export const AddWalletText = styled(DefaultAddWalletText)`
  cursor: pointer;
`;
