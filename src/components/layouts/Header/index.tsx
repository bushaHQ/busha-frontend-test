import BushaLogo from "assets/logo/busha.svg";
import Image from "components/others/Image";
import { Container } from "../AppWrapper";
import { HeaderWrapper } from "./Header.style";

type HeaderProps = {
  fullname: string;
};

export default function Header({ fullname }: HeaderProps) {
  const initials = fullname ? fullname[0] : "B";
  return (
    <HeaderWrapper>
      <Container>
        <div className="header-content">
          <Image src={BushaLogo} alt="Busha Logo" className="busha-logo" />
          <div className="profile-area color-grey1">
            <div className="user-avatar">{initials}</div>
            <h4 className="user-fullname">{fullname}</h4>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
}
