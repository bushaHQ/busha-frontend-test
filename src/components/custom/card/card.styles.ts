/** @format */

import styled from "styled-components";

export const Box = styled.div`
  height: 150px;
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  padding: 1em;

  .amount {
    color: #ffffff;
    font-sixe 16px;
    font-weight: 500;
    padding: 1em 0;

    span {
        padding: 0 .3em;
    }
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  p {
    color: #9aa5b1;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.p`
  float: right;
  width: 32px;
  height: 32px;
  background: #303030;
  border-radius: 30px;
  display: grid;
  place-content: center;
  align-items: center;
`;
