import { IconType } from "../Icon/Icon.interface";

export type SelectProps = {
  value: string;
  disabled?: boolean;
  onChange: (val?) => void;
  options?: { value; label }[];
};
