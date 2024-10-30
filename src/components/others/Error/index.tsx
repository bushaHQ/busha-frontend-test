import Button from "components/form/Button";
import ErrorSvg from "assets/icons/error.svg";
import Error2Svg from "assets/icons/error-2.svg";
import Cancel2 from "assets/icons/cancel-2.svg";
import Image from "../Image";
import { ErrorWrapper, ToastErrorWrapper } from "./Error.style";

type ErrorProps = {
  message: string;
  onRetry: () => void;
};

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <ErrorWrapper>
      <Image src={ErrorSvg} alt="error" className="error-img" />
      <p className="error-message color-grey1">{message}</p>
      <Button text="Try again" onClick={onRetry} />
    </ErrorWrapper>
  );
}

export function ToastError({ message, onRetry }: ErrorProps) {
  return (
    <ToastErrorWrapper className="color-red2">
      <div className="error-content color-red1">
        <Image src={Error2Svg} alt="error" className="error" />
        <p className="error-message">{message}</p>
      </div>
      <button type="button" className="error-close" onClick={onRetry}>
        <Image src={Cancel2} alt="error" className="error" />
      </button>
    </ToastErrorWrapper>
  );
}
