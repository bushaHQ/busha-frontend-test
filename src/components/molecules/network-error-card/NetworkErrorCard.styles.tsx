import styled from "styled-components";

import { NetworkErrorText as DefaultNetworkErrorText } from "../../atoms/Typography";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const NetworkErrorText = styled(DefaultNetworkErrorText)`
  margin: 1.625rem 0 2.625rem 0;
`;
