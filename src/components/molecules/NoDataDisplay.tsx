import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const NoDataDisplayStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;

  .alert-circle {
    height: 100px;
    width: 100px;
    border: 5px solid #ffbdbd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26px;

    .alert-sign {
      color: #e12d39;
      font-size: 70px;
    }
  }
  .alert-text {
    font-size: 18px;
    margin-bottom: 42px;
  }
`;
interface Props {
  handleButtonClick?: Function;
}
const NoDataDisplay = ({ handleButtonClick = () => {} }: Props) => {
  return (
    <NoDataDisplayStyles>
      <div className="alert-circle">
        <span className="alert-sign">!</span>
      </div>
      <p className="alert-text">Network Error</p>
      <Button onClick={() => handleButtonClick()}>Try again </Button>
    </NoDataDisplayStyles>
  );
};

export default NoDataDisplay;
