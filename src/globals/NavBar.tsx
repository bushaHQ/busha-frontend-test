import logo from "../assets/logo.png";

interface AppProps {}
export const NavBar: React.FC<AppProps> = (props) => {
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
