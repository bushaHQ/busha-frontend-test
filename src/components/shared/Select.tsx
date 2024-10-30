import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/icons/arrow-down.svg";

type SelectProps = {
  label: string;
};

const SelectWrapper = styled.div`
  label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 10px;
    color: #3e4c59;
  }

  select {
    width: 100%;
    height: 64px;
    border-radius: 5px;
    border: 1px solid #cbd2d9;
    padding: 0 20px;
    outline: none;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearence: none;
    background-image: url(${Arrow});
    background-position: right center;
    background-repeat: no-repeat;
    background:size:contain;
    background-position-x: 96%;
  }
`;

export default function Select({ label }: SelectProps) {
  return (
    <SelectWrapper>
      <label>{label}</label>
      <select>
        <option>BTC</option>
        <option>DOGT</option>
      </select>
    </SelectWrapper>
  );
}
