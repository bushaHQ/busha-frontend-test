/** @format */

import { WarningIcon } from "assets/svgs";
import { Button, Centralize, WarningText } from "./tryAgain.styles";

interface ITryAgainProps {
  retryFunction: () => void;
}

const TryAgain = ({ retryFunction }: ITryAgainProps) => {
  return (
    <Centralize>
      <WarningIcon />
      <WarningText>Network Error</WarningText>
      <Button onClick={() => retryFunction()}>Try again</Button>
    </Centralize>
  );
};

export default TryAgain;
