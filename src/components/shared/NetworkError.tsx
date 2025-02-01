import styled from "styled-components";
import Loader from "./Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  width: 100px;
`;

const Icon = styled.img`
  width: 100%;
`;

const NetworkErrorText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #3e4c59;
`;

const TryAgainButton = styled.button`
  color: #fff;
  background-color: #000000;
  height: 54px;
  width: 186px;
  cursor: pointer;
  border-radius: 40px;
  outline: none;
  box-shadow: none;

  &:hover {
    opacity: 0.9;
  }
`;

const NetworkError = ({
  tryAgainClick,
  loading,
}: {
  tryAgainClick: VoidFunction;
  loading: boolean;
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src="error.svg" alt="error" />
      </IconWrapper>
      <NetworkErrorText>Network Error</NetworkErrorText>
      <TryAgainButton onClick={tryAgainClick} disabled={loading}>
        {loading ? <Loader size={20} /> : "Try again"}
      </TryAgainButton>
    </Wrapper>
  );
};

export default NetworkError;
