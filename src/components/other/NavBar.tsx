import styled, { keyframes } from "styled-components";
import Avatar from "./UserAvatar";
import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";

const userName = "Chukwuemeka Agu";
const slideDownDuration = 600;

function NavBar({
  showMobileSidebar,
  setShowMobileSidebar,
}: {
  showMobileSidebar: boolean;
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [slideComplete, setSlideComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideComplete(true);
    }, slideDownDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavDiv>
      <LogoButton slideComplete={slideComplete}>
        <img src="/logo.svg" alt="logo" />
      </LogoButton>
      <UserNameDiv slideComplete={slideComplete}>
        <Avatar name="Chukwuemeka" />
        <NameSpan>{userName}</NameSpan>
        <MenuIcon onClick={() => setShowMobileSidebar(!showMobileSidebar)} isOpen={showMobileSidebar} />
        {/* <button onClick={() => setShowMobileSidebar(!showMobileSidebar)}>{showMobileSidebar ? "Close" : "Open"}</button> */}
      </UserNameDiv>
    </NavDiv>
  );
}

export default NavBar;

// Slide-down animation for NavDiv
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Zoom-out animation for LogoButton and UserNameDiv
const zoomOut = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const NavDiv = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: white;
  box-shadow: 0px 4px 12px 0px #0000000d;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;

  @media (min-width: 968px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media (min-width: 1200px) {
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  animation: ${slideDown} ${slideDownDuration} ease forwards;
`;

const UserNameDiv = styled.div<{ slideComplete: boolean }>`
  display: flex;
  gap: 5px;
  align-items: center;
  opacity: 0;
  animation: ${(props) => (props.slideComplete ? zoomOut : "none")} 0.4s ease
    forwards;
  animation-delay: ${slideDownDuration};
`;

const NameSpan = styled.span`
  display: none;

  @media (min-width: 969px) {
    display: inline-block;
    color: #3e4c59;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
  }
`;

const LogoButton = styled.button<{ slideComplete: boolean }>`
  background-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;
  animation: ${(props) => (props.slideComplete ? zoomOut : "none")} 0.4s ease
    forwards;
  animation-delay: ${slideDownDuration};
`;
