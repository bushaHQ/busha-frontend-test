import "../../index.scss";

function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-bar-menu-active">Wallets</div>
        <div className="nav-bar-menu">Prices</div>
        <div className="nav-bar-menu">Peer2Peer</div>
        <div className="nav-bar-menu">Activity</div>
        <div className="nav-bar-menu">Settings</div>
      </div>
    </div>
  );
}

export default NavBar;
