import styled from "styled-components";
import { CircleBgProps } from "./CircleBg.interface";

export const Container = styled.div<CircleBgProps>`
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? `${size}px` : `2rem`)};
  height: ${({ size }) => (size ? `${size}px` : `2rem`)};
  min-width: ${({ size }) => (size ? `${size}px` : `2rem`)};
  max-height: ${({ size }) => (size ? `${size}px` : `2rem`)};
  background: ${({ color }) => color || `rgba(154, 165, 177, 0.3)`};
`;
