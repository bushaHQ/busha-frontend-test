/** @format */

import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 74px 24px;
`;

export const TextBlock = styled.div`
  display: block;

  h2 {
    margin-bottom: 3em;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    color: #3e4c59;
  }
`;

export const TopRight = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 70ppx;
`;

export const FormWrapper = styled.form`
  margin-top: 43px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 16px;
    color: #3e4c59;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  padding: 0 1.5em;
  flex-direction: column;
  border: 1px solid #cbd2d9;
`;

export const MainSelect = styled.select`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  padding-right: 50px;
  height: 64px;
  cursor: pointer;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 33px 0;
`;

export const Submit = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  width: 186px;
  height: 54px;
  background: #000000;
  cursor: pointer;
  border-radius: 40px;
`;
