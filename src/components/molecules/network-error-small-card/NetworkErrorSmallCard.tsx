import React, { useState } from "react";

import {
  CloseIcon,
  Container,
  NetworkErrorRedText,
  TextandIconContainer,
} from "./NetworkErrorSmallCard.styles";
import { Icon } from "../../atoms";

export const NetworkErrorSmallCard: React.FC<{}> = () => {
  const [dismissError, setDismissError] = useState(false);

  return !dismissError ? (
    <Container>
      <TextandIconContainer>
        <Icon name="error-sign" />
        <NetworkErrorRedText>Network Error</NetworkErrorRedText>
      </TextandIconContainer>
      <CloseIcon onClick={() => setDismissError(true)} />
    </Container>
  ) : null;
};
