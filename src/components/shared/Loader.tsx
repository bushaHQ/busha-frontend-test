import styled, { css, keyframes } from "styled-components";

const spinKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export interface LoaderProps {
  size?: number;
  width?: number;
}

const LoaderDiv = styled.div.attrs({
  "aria-label": "Loading...",
})<LoaderProps>`
  animation: ${spinKeyframes} 500ms infinite linear;
  color: gray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #616e7c;
  border-top-color: #cbd2d9;
  border-right-color: #cbd2d9;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `};

  ${(props) =>
    props.width &&
    css`
      border-width: ${props.width}px;
    `};
`;

export default function Loader(props: LoaderProps) {
  return <LoaderDiv {...props} />;
}
