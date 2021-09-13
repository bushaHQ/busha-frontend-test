import styled, { keyframes } from "styled-components";

const animateBody = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const PageTransition = styled.div`
  animation-name: ${animateBody};
  animation-duration: 2s;
  @media screen and (max-width: 720px) {
    animation-name: ${animateBody};
  }
`;
