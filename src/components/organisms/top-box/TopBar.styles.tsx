import styled from "styled-components";

import { Icon } from "../../atoms";

export const Bar = styled.header`
  padding: 0 8%;
  display: flex;
  height: 3.5rem;
  align-items: center;
  margin-bottom: 3.75rem;
  justify-content: space-between;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    padding: 0 0.625rem 0.625rem;
  }
`;

export const Logo = styled(Icon).attrs({ name: "logo" })`
  margin-right: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.MOBILE}) {
    margin-right: 1rem;
  }
`;
