interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <aside className="flex flow sidebar">
      <nav className="fh-screen">
        <ul className="flow">
          <li>Wallets</li>
          <li>Prices</li>
          <li>Peer2Peer</li>
          <li>Activity</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
