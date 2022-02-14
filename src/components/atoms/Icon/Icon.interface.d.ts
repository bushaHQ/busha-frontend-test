export type IconType =
  | "logo"
  | "menu"
  | "error"
  | "close"
  | "error-sign"
  | "down-arrow"
  | "right-arrow";

export type IconProps = {
  color?: string;
} & React.SVGProps<SVGSVGElement>;
