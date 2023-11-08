const NavBar = () => {
    const navLinks = [
      {
        id: 1,
        name: "Wallets",
        link: "#"
      },
      {
        id: 2,
        name: "Prices",
        link: "#"
      },
      {
        id: 3,
        name: "Peer2Peer",
        link: "#"
      },
      {
        id: 4,
        name: "Activity",
        link: "#"
      },
      {
        id: 5,
        name: "Settings",
        link: "#"
      }
    ]


    return (
      <ul className="navLinks">
        {navLinks.map((nav) => {
          const {id, name, link} = nav;
          return (
          <li key={id} style={{width: "100%", height: "40px"}}><a href={link} style={{color: "#3e4c59", textDecoration: "none", fontSize: "16px", lineHeight: "16px"}}>{name}</a></li>
          )
        })}
      </ul>
    )
  }

  export default NavBar;