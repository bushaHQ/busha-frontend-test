import styled from "styled-components";
import WalletCardBg from "../assets/image/walletbg.png";
export const Header = styled.header`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 0px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

export const Layout = styled.div`
  padding: 60px 160px;
  background: #ffffff;
  display: flex;
`;
export const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 65px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MainText = styled.h1`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #000000;
  margin: 0;
`;
type NavContainerProps = { active?: boolean };
export const NavContainer = styled.div<NavContainerProps>`
  background: ${({ active }) => (active === true ? "#f5f7fa" : "#FFFFFF")};
  border-radius: 3px;
  width: 240px;
  padding: 14px 17px;
`;
export const NavText = styled.p`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  margin: 0;
`;
export const AddWalletText = styled.p`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */
  text-align: right;
  cursor: pointer;
  color: #000000;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WalletCard = styled.div`
  width: 240px;
  height: 150px;
  background-image: url(${WalletCardBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 350px 350px;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const ImageSymbolContainer = styled.img`
  border-radius: 30px;
  height: 34px;
  width: 34px;
  margin-right: 8px;
`;
export const WalletCardHeader = styled.div`
  display: flex;
`;

export const WalletCardCurrencyText = styled.p`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #9aa5b1;
`;

export const WalletAmountText = styled.p`
  margin: 18px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
`;
export const WalletCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const WalletCircularBg = styled.div`
  background: #303030;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;

export const MainBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 20px;
  width: 100%;
`;

export const AddWalletTextModal = styled.div`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

export const ModalContent = styled.div`
  padding: 74px 24px;
`;

export const LoadingStateContainer = styled.div<{ isModal?: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: ${({ isModal = false }) => (isModal === true ? "100vh" : "")};
  padding-top: ${({ isModal = false }) => (isModal === true ? "" : "170px")};
`;

export const NetworkError = styled.div<{ isOpenNetwork: boolean }>`
  display: ${({ isOpenNetwork }) => (isOpenNetwork ? "none" : "flex")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  width: 392px;
  height: 50px;
  background: #fff4f4;
  border: 1px solid #e0b3b2;
  box-sizing: border-box;
  border-radius: 8px;
`;
export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 142px;
`;

export const ButtonText = styled.p`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  text-align: center;

  /* white */

  color: #ffffff;
`;

export const CloseButton = styled.img`
  height: 16px;
  width: 16px;
  border-radius: 0px;
  cursor: pointer;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalBodyText = styled.div`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #3e4c59;
  margin-bottom: 43px;
`;

export const SelectWalletDropDown = styled.select`
  margin-top: 14px;
  margin-bottom: 27px;
  width: 392px;
  height: 64px;
  border: 1px solid #cbd2d9;
  padding: 24px 25px;
  outline: 1px solid;
  border-right: 18px solid transparent;
  border-radius: 5px;
`;
export const SelectWalletLabel = styled.label`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3e4c59;
`;
export const ButtonPrimary = styled.button`
  width: 222px;
  height: 54px;
  left: 0px;
  top: 0px;
  background: #000000;
  border-radius: 40px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 197px;
  height: 36px;
`;

export const UserProfileAvatarWrapper = styled.div`
  background: rgba(154, 165, 177, 0.3);
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const UserProfileText = styled.p`
  font-family: "Aribau Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #3e4c59;
`;
