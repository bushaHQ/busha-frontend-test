import React from "react";

import { MenuItemText } from "..";
import { Container } from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.interface";

export const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  isActive,
  children,
}) => {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <MenuItemText>{children}</MenuItemText>
    </Container>
  );
};
