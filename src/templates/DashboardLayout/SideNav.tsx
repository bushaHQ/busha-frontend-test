import React, { useState } from "react";
import menuLinks from "./MenuLinks";
import { MenuItem, StyledSideNav } from "./StyledDashboard";

const SideNav = () => {
  const [currentPath] = useState(window.location.pathname);
  return (
    <StyledSideNav>
      {menuLinks.map(({ name, link }, index) => {
        const isActive = currentPath === link;
        return (
          <MenuItem {...{ isActive }} key={`dash-layout-side_link-${index}`}>
            <p>{name}</p>
          </MenuItem>
        );
      })}
    </StyledSideNav>
  );
};

export default SideNav;
