import styled from "styled-components";

export const Container = styled.li<{ isActive: boolean }>`
  width: 100%;
  cursor: pointer;
  list-style: none;
  max-width: 15rem;
  padding: 0.938rem;
  border-radius: 0.188rem;
  margin-bottom: 0.313rem;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.GREY_30_COLOR : theme.colors.WHITE_COLOR};
  color: ${({ isActive, theme }) => isActive && theme.colors.BLACK_COLOR};
  &:hover {
    background: ${({ theme }) => theme.colors.GREY_30_COLOR};
  }
  h4 {
    color: ${({ isActive, theme }) => isActive && theme.colors.BLACK_COLOR};
  }
`;
