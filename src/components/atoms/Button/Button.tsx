import React from "react";

import Loader from "../../shared/Loader";
import { ButtonProps } from "./Button.interface";
import { Content, PrimaryButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={isLoading}
      isLoading={isLoading}
      {...(props as any)}
    >
      <Content>{isLoading ? <Loader /> : children}</Content>
    </PrimaryButton>
  );
};
