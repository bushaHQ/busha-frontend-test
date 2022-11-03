import styled from "styled-components";

export default function SideNav() {
  return (
    <SideNavDiv>
      <div className="nav-menu">
        <NavItem className=" active" href="/">
          Wallets
        </NavItem>
        <NavItem href="/">Prices</NavItem>
        <NavItem href="/">Peer2Peer</NavItem>
        <NavItem href="/">Activity</NavItem>
        <NavItem href="/">Settings</NavItem>
      </div>
    </SideNavDiv>
  );
}

const SideNavDiv = styled.aside`
  width: 240px;
  height: 100%;
  position: fixed;

  div {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.a`
  width: 100%;
  height: 44px;
  padding: 0px 17px;
  border-radius: 3px;
  text-decoration: none;
  color: #3e4c59;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: background 300ms linear 0s;

  &.active {
    background: #f5f7fa;
    color: #000000;
    font-weight: 500;
  }
`;
