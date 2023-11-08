import Logo from "./images/logo.png"

const Header = () => {
    return (
      <div className="header">
        <figure><img className="busha-logo" src={Logo} alt="Busha logo"/></figure>
        <div className="profile">
          <span className="initial">A</span>
          <span className="full-name" style={{color: "#3e4c59"}}>Ajibola Obiwole</span>
        </div>
      </div>
    )
  }


export default Header;