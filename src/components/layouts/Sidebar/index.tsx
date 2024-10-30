import { SidebarWrapper } from "./Sidebar.style";

export default function Sidebar() {
  const links = ["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"];

  return (
    <SidebarWrapper>
      <ul className="sidebar-links-ul">
        {links.map((item: string) => (
          <li className="sidebar-link-item color-grey1" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
}
