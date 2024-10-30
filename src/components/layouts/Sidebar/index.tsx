import { useState } from "react";
import { SidebarWrapper } from "./Sidebar.style";

export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState<string>("Wallets");
  const links = ["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"];

  return (
    <SidebarWrapper>
      <ul className="sidebar-links-ul">
        {links.map((item: string) => (
          <li
            onClick={() => setCurrentPath(item)}
            className={`sidebar-link-item color-grey1 ${
              currentPath === item ? "active" : ""
            }`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
}
