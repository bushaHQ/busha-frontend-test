import logo from "../assets/logo.png";
import "./Nav.scss";
//
interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <header className="flex header">
      <div className="flex container nav">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="flex">
            <li>
              <p className="flex user">
                <span className="grid avatar">O</span>Oluwatobi Akindunjoye
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
