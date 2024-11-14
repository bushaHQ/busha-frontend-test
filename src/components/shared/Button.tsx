import styled from "styled-components";
import Loader from "./Loader";

interface ButtonT {
  text: string;
  loadingText: string;
  onClick: () => void;
  isLoading: boolean;
}

function Button({ text, loadingText, onClick, isLoading }: ButtonT) {
  return (
    <ButtonStyles isLoading={isLoading} onClick={onClick} disabled={isLoading}>
      {isLoading && <Loader size={16} />}
      {isLoading ? loadingText : text}
    </ButtonStyles>
  );
}

export default Button;

const ButtonStyles = styled.button<{ isLoading: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({ isLoading }) => isLoading ? "#6D7F8C" : "#000"};
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  padding: 18px 54px;
  border: none;
  border-radius: 24px;
  cursor: ${({ isLoading }) => isLoading ? "not-allowed" : "pointer"};
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: ${({ isLoading }) => isLoading ? "" : "scale(0.9)"};
  }
`;
