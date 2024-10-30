import Loader from "components/shared/Loader";
import { ButtonComponent } from "./Button.style";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
};

export default function Button({
  text,
  onClick,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <ButtonComponent onClick={onClick} {...rest}>
      {loading ? <Loader /> : text}
    </ButtonComponent>
  );
}
