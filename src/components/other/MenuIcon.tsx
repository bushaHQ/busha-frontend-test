import styled, { css } from "styled-components";

function MenuIcon({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const OpenIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="6" width="16" height="2" />
      <rect x="4" y="11" width="16" height="2" />
      <rect x="4" y="16" width="16" height="2" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="4"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="4"
        x2="4"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <IconWrapper onClick={onClick} isOpen={isOpen}>
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </IconWrapper>
  );
}

export default MenuIcon;

const IconWrapper = styled.div`
  display: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top: 4px;

  /* Rotate icon when menu is open */
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: rotate(90deg);
    `}

  @media (max-width: 968px) {
    display: block;
  }
`;
