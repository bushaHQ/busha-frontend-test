import Loader from "components/shared/Loader";
import { ButtonComponent } from "./Button.style";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
};

export default function Button({ text, onClick, loading }: ButtonProps) {
  return (
    <ButtonComponent onClick={onClick}>
      {loading ? <Loader /> : text}
    </ButtonComponent>
  );
}
