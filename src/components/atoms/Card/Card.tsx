import React from "react";
import { CardProps } from "./Card.interface";

import { Container } from "./Card.styles";

export const Card: React.FC<CardProps> = ({
  children,
  shadow = true,
  ...props
}) => (
  <Container shadow={shadow} {...props}>
    {children}
  </Container>
);
