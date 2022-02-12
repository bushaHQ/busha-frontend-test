import styled from "styled-components";

import { CircleBg as DefaultCircleBg } from "../../atoms";

export const Container = styled.div`
  display: flex;
  max-width: 13rem;
  align-items: center;
  justify-content: flex-end;
`;

export const CircleBg = styled(DefaultCircleBg)`
  margin-right: 0.313rem;
`;
