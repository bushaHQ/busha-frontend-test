import React from "react";
import styled from "styled-components";
import ErrorSVG from "../../assets/images/error.svg";
import { ErrorStateProps } from "../../types";

export default function ErrorState(
  props: React.PropsWithChildren<ErrorStateProps>
) {
  const { refetch } = props;
  return (
    <ErrorDiv>
      <img src={ErrorSVG} alt="" />
      <p>Network Error</p>
      <button type="button" onClick={() => refetch({})}>
        Try again
      </button>
    </ErrorDiv>
  );
}
const ErrorDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #3e4c59;
    margin-top: 26px;
  }

  button {
    margin-top: 48px;
    height: 54px;
    padding: 0px 54px;
    border-radius: 40px;
    transition: background-color 300ms ease-in 0s;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    background-color: #000000;
    color: #ffffff;
    border: 1px solid transparent;
  }
`;
