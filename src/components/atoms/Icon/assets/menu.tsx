import { IconProps } from "../Icon.interface";

export const MenuIcon = ({ color, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "#000000"}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
    </svg>
  );
};
