/** @format */

import styled from "styled-components";

export const AlertWrapper = styled.div<{ error?: boolean }>`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  border-radius: 8px;
  padding: 0 1.25em;
  background: #fff4f4;
  border: 1px solid #e0b3b2;
`;

export const StartAdorment = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
