import styled from "styled-components";
import { CardProps } from "./Card.interface";

export const Container = styled.div<CardProps>`
  padding: 1rem;
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 10px 20px rgba(138, 138, 138, 0.5)" : "none"};
`;
