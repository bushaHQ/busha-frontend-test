import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const PrimaryButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: 500;
  border-radius: 2.4rem;
  padding: 1rem 3.375rem;
  transition: all 0.1s ease-in-out;
  font-size: ${({ theme }) => theme.fonts.LG};
  line-height: ${({ theme }) => theme.fonts.LG};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
  background: ${({ theme }) => theme.colors.BLACK_COLOR};
  border: 1.5px solid ${({ theme }) => theme.colors.BLACK_COLOR};
  &:hover {
    transform: scale(0.99);
  }

  &:focus {
    border: 1px solid red inset;
    color: ${({ theme }) => theme.colors.WHITE_COLOR};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
