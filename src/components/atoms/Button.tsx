import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) =>
    props.variant === "secondary" ? "transparent" : "#000000"};
  padding: ${(props) => (props.variant === "secondary" ? 0 : "18px 54px")};
  border-radius: 40px;
  border: none;
  color: ${(props) => (props.variant === "secondary" ? "#000000" : "white")};
  cursor: pointer;
  align-items: center;
  font-size: 18px;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
