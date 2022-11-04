import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="fh-screen">
        <ul className="flow">
          <li className="pointer">Wallets</li>
          <li className="pointer">Prices</li>
          <li className="pointer">Peer2Peer</li>
          <li className="pointer">Activity</li>
          <li className="pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
