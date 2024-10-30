import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const ButtonComponent = styled.button`
  padding: 10px 55.01px;
  height: 54px;
  gap: 10px;
  border-radius: 40px;
  background: #000000;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Button({ text, onClick }: ButtonProps) {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
}
