import React, { useState } from "react";

import { MenuItem } from "../../atoms";
import { NavList } from "./Menu.styles";

export const MenuList: React.FC<{}> = () => {
  const [item, setItem] = useState("Wallets");

  // navItem could be extended to include route property.
  const navItem = [
    { name: "Wallets" },
    { name: "Prices" },
    { name: "Peer2Peer" },
    { name: "Activity" },
    { name: "Settings" },
  ];
  return (
    <NavList>
      {navItem.map(({ name }) => (
        <MenuItem
          isActive={item === name}
          key={name}
          onClick={() => setItem(name)}
        >
          {name}
        </MenuItem>
      ))}
    </NavList>
  );
};
