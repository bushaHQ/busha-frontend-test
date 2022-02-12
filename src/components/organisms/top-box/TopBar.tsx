import React from "react";

import { Bar, Logo } from "./TopBar.styles";
import { UserDetails } from "../../molecules";

export const TopBar: React.FC<{}> = () => {
  return (
    <Bar>
      <Logo />
      <UserDetails />
    </Bar>
  );
};
