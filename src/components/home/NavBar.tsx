import styled, { keyframes } from "styled-components";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";

const userName = "Oluwatobi Akindunjoye";
const slideDownDuration = 600;

function NavBar() {
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
        <img src="/busha-logo.svg" alt="Busha-logo" />
      </LogoButton>
      <UserNameDiv slideComplete={slideComplete}>
        <Avatar name="Oluwatobi" />
        <NameSpan>{userName}</NameSpan>
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
  padding-left: 160px;
  padding-right: 160px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: white;
  box-shadow: 0px 4px 12px 0px #0000000d;
  position: sticky;
  top: 0;
  left: 0;
  animation: ${slideDown} ${slideDownDuration} ease forwards;
`;

const UserNameDiv = styled.div<{ slideComplete: boolean }>`
  display: flex;
  gap: 5px;
  align-items: center;
  opacity: 0;
  animation: ${(props) => (props.slideComplete ? zoomOut : "none")} 0.4s ease forwards;
  animation-delay: ${slideDownDuration};
`;

const NameSpan = styled.span`
  color: #3e4c59;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

const LogoButton = styled.button<{ slideComplete: boolean }>`
  background-color: transparent;
  cursor: pointer;
  border: none;
  opacity: 0;
  animation: ${(props) => (props.slideComplete ? zoomOut : "none")} 0.4s ease forwards;
  animation-delay: ${slideDownDuration};
`;
