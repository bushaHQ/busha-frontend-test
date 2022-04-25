/** @format */

import { CancelIcon, DangerIcon } from "assets/svgs";
import { AlertWrapper, StartAdorment } from "./alert.styles";

const Alert = ({ hide }: any) => {
  return (
    <AlertWrapper>
      <StartAdorment>
        <DangerIcon />
        <p>Network Error</p>
      </StartAdorment>
      <span aria-label="Close button" onClick={() => hide(false)}>
        <CancelIcon />
      </span>
    </AlertWrapper>
  );
};

export default Alert;
