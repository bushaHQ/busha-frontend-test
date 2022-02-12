import React from "react";

import { Heading } from "../../atoms";
import { HeaderProps } from "./Header.interface";
import { AddWalletText, Container } from "./Header.styles";

export const Header: React.FC<HeaderProps> = ({ noData = true, setModal }) => {
  return (
    <Container noData={noData}>
      <Heading>Walllets</Heading>
      {!noData && (
        <AddWalletText onClick={() => setModal(true)}>
          + Add new wallet
        </AddWalletText>
      )}
    </Container>
  );
};
