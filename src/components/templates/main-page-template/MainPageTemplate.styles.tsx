import styled, { css } from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  padding: 0 8% 0.625rem 8%;
`;

export const MainArea = styled.main`
  width: 100%;
`;

export const AccountContainer = styled.section<{ noData: boolean }>`
  gap: 40px;
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 260px);
  ${({ noData }) => {
    if (noData) {
      return css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;

export const MenuContainer = styled.nav`
  width: 20%;
  margin-right: 4.063rem;
`;
