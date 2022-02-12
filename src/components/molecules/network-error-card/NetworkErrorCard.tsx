import React from "react";

import { Button, Icon } from "../../atoms";
import { NetworkErrorCardProps } from "./NetworkErrorCard.interface";
import { Container, NetworkErrorText } from "./NetworkErrorCard.styles";

export const NetworkErrorCard: React.FC<NetworkErrorCardProps> = ({
  reFetch,
}) => {
  return (
    <Container>
      <Icon name="error" />
      <NetworkErrorText>Network Error</NetworkErrorText>
      <Button onClick={() => reFetch()}>Try again</Button>
    </Container>
  );
};
