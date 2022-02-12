import React from "react";

import { FullNameText, InitialText } from "../../atoms";
import { CircleBg, Container } from "./UserDetails.styles";
import { UserDetailProps } from "./UserDetails.interface.d.ts";

export const UserDetails: React.FC<UserDetailProps> = ({
  fullName = "Oluwatobi Akindunjoye",
}) => {
  return (
    <Container>
      <CircleBg size={36}>
        <InitialText>{fullName[0]}</InitialText>
      </CircleBg>
      <FullNameText>{fullName}</FullNameText>
    </Container>
  );
};
