/** @format */

import styled from "styled-components";

export const MainWrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const FeedBackDiv = styled.div<{ top?: string }>`
  position: absolute;
  top: ${({ top }) => top ?? "35"}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexBtw = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Divisor = styled.hr`
  border: 1px solid rgba(211, 213, 216, 0.5);
  margin: 1em 0;
`;

export const WalletsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: wrap;
  gap: 2.5em;
`;
