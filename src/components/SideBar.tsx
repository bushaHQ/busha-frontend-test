export default function SideBar() {
  return (
    <ul>
      <li className="selected-route">
        <a href="#">
          <div>
            Wallets
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            Prices 
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            Peer2Peer
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            Activity
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            Settings
          </div>
        </a>
      </li>
    </ul>
  );
}
