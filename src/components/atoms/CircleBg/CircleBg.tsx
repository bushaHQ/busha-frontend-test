import React from "react";

import { Container } from "./CircleBg.styles";
import { CircleBgProps } from "./CircleBg.interface";

export const CircleBg: React.FC<CircleBgProps> = ({
  size,
  color,
  onClick,
  children,
  ...props
}) => {
  return (
    <Container onClick={onClick} size={size} color={color} {...props}>
      {children}
    </Container>
  );
};
