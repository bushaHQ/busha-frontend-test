/** @format */

import styled, { css } from "styled-components";

export const AsideWrapper = styled.div``;

export const LinkComponent = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  width: 240px;
  height: 44px;
  color: #3e4c59;
  font-size: 16px;
  padding-left: 17px;

  ${({ active }) =>
    active &&
    css`
      background: #f5f7fa;
      border-radius: 3px;
      color: #000;
      font-weight: 500;
    `}
`;
