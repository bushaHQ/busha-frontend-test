import styled from "styled-components";
import { useAppContext } from "../hook/useAppContext";
import networkerrorsvg from "../asset/image/networkerrorsvg.svg";
import { AppContextProps } from "../context/appContext";
import Loader from "./shared/Loader";

interface NetworkErrorProps {
  onTry: () => void;
  marginTop: number;
}

export const NetworkError = ({ onTry, marginTop }: NetworkErrorProps) => {
  const { isLoading } = useAppContext() as AppContextProps;
  return (
    <>
      {isLoading ? (
        <LoaderContainerStyle>
          <Loader width={8} size={84} />
        </LoaderContainerStyle>
      ) : (
        <NetworkErrorStyle marginTop={marginTop}>
          <img src={networkerrorsvg} alt="" />
          <p>Network Error</p>
          <button onClick={onTry}>Try again</button>
        </NetworkErrorStyle>
      )}
    </>
  );
};

const NetworkErrorStyle = styled.div<{ marginTop?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.marginTop ?? 0}px;

  & img {
    width: 100px;
    height: 100px;
  }

  & p {
    margin-top: 26px;
    color: #3e4c59;
    text-align: center;
    font-size: 18px;
  }

  & button {
    margin-top: 42px;
    padding: 18px 54px;
    color: var(--white, #fff);
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    border-radius: 40px;
    background: #000;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const LoaderContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 170px;
`;
