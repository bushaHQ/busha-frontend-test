import styled, { css } from "styled-components";

export const flexBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyle = css`
  padding: 0.5rem 2rem;
  background: #000000;
  color: #fff;
  border: none;
  border-radius: 40px;
`;

export const AllContentBox = styled.div`
  display: flex;
  padding: 1rem 7rem;

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;
