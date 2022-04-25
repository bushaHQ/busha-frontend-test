/** @format */

import React from "react";
import { AsideWrapper, LinkComponent } from "./aside.styles";

const LINKS = [
  {
    label: "Wallets",
    link: "/wallets",
    isActive: true,
  },
  {
    label: "Prices",
    link: "/prices",
    isActive: false,
  },
  {
    label: "Peer2Peer",
    link: "/peer2peer",
    isActive: false,
  },
  {
    label: "Activity",
    link: "/activity",
    isActive: false,
  },
  {
    label: "Settings",
    link: "/settings",
    isActive: false,
  },
];
const Aside = () => {
  return (
    <AsideWrapper>
      {LINKS.map((link, idx) => (
        <LinkComponent active={link.isActive} key={idx}>
          {link.label}
        </LinkComponent>
      ))}
    </AsideWrapper>
  );
};

export default Aside;
