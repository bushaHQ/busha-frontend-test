/** @format */

import Logo from "assets/images/logo.png";
import { HeaderWrapper, InfoWrapper, Name } from "./header.styles";
import Avatar from "../avatar";

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <img src={Logo} alt="Busha" />
      </div>

      <InfoWrapper>
        <Avatar text="Oluwatobi Akindunjoye" />
        <Name>Oluwatobi Akindunjoye</Name>
      </InfoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
