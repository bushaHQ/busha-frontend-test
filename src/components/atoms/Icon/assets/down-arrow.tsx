import { IconProps } from "../Icon.interface";

export const DownArrow = ({ color, ...props }: IconProps) => {
  return (
    <svg
      width={12}
      height={10}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0002 1.18548C12.0002 0.882074 11.9022 0.578667 11.7072 0.347556C11.3162 -0.115851 10.6842 -0.115851 10.2933 0.347556L6.00025 5.43556L1.70725 0.347556C1.31625 -0.115852 0.68425 -0.115852 0.29325 0.347556C-0.09775 0.810963 -0.0977501 1.56 0.29325 2.02341L5.29325 7.94933C5.68425 8.41274 6.31625 8.41274 6.70725 7.94933L11.7072 2.02341C11.9022 1.7923 12.0002 1.48889 12.0002 1.18548Z"
        fill={color || "#616E7C"}
      />
    </svg>
  );
};
