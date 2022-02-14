import styled, { css } from "styled-components";

import { Icon } from "../../atoms";

export const BodyContainer = styled.div`
  display: flex;
  padding: 0 8% 0.625rem 8%;

  @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    padding: 0 0.625rem 0.625rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  top: 0%;
  left: 0%;
  bottom: 0%;
  width: 300px;
  height: 100%;
  max-width: 100vw;
  overflow-y: auto;
  position: absolute;
  background: #ffffff;
  padding: 4.625rem 0 1.5rem 1.5rem;
`;

export const MobileMenuContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    display: none;
  }
`;

export const Close = styled(Icon).attrs({ name: "close" })`
  top: 2.625rem;
  right: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
`;

export const MenuIcon = styled(Icon).attrs({ name: "menu" })`
  top: 5.4rem;
  left: 0.625rem;
  cursor: pointer;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    display: none;
  }
`;
