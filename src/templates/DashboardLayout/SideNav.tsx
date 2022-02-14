import React, { useState } from "react";
import menuLinks from "./MenuLinks";
import { MenuItem } from "./StyledDashboard";

const SideNav = () => {
  const [currentPath] = useState(window.location.pathname);
  return (
    <aside>
      {menuLinks.map(({ name, link }, index) => {
        const isActive = currentPath === link;
        return (
          <MenuItem {...{ isActive }} key={`dash-layout-side_link-${index}`}>
            <p>{name}</p>
          </MenuItem>
        );
      })}
    </aside>
  );
};

export default SideNav;
