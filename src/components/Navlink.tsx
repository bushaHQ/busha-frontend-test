import styled from "styled-components";

const Navlink = ({ link }: { link: sideLinkType }) => {
  return (
    <NavlinkWrapper isActive={window.location.pathname === link.link}>
      <a
        href={link.link}
        className={
          window.location.pathname === link.link ? "font-weight-bold" : ""
        }
      >
        {link.name}
      </a>
    </NavlinkWrapper>
  );
};

export default Navlink;

const NavlinkWrapper = styled.li<{ isActive: boolean }>`
  border-radius: 3px;
  padding: 10px 15px;
  margin-bottom: 5px;
  ${(props) => props.isActive && "background: #f5f7fa;"}
  a {
    text-decoration: none;
    color: #000000;
  }
  :hover {
    background: #f5f7fa;
  }
`;
