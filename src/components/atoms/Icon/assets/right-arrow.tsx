import { IconProps } from "../Icon.interface";

export const RightArrow = ({ color, ...props }: IconProps) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00001 16C7.74401 16 7.48801 15.902 7.29301 15.707C6.90201 15.316 6.90201 14.684 7.29301 14.293L11.586 10L7.29301 5.70701C6.90201 5.31601 6.90201 4.68401 7.29301 4.29301C7.68401 3.90201 8.31601 3.90201 8.70701 4.29301L13.707 9.29301C14.098 9.68401 14.098 10.316 13.707 10.707L8.70701 15.707C8.51201 15.902 8.25601 16 8.00001 16Z"
        fill={color || "#CBD2D9"}
      />
      <mask
        id="mask0_942_160"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={6}
        y={3}
        width={9}
        height={13}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00001 16C7.74401 16 7.48801 15.902 7.29301 15.707C6.90201 15.316 6.90201 14.684 7.29301 14.293L11.586 10L7.29301 5.70701C6.90201 5.31601 6.90201 4.68401 7.29301 4.29301C7.68401 3.90201 8.31601 3.90201 8.70701 4.29301L13.707 9.29301C14.098 9.68401 14.098 10.316 13.707 10.707L8.70701 15.707C8.51201 15.902 8.25601 16 8.00001 16Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_942_160)" />
    </svg>
  );
};
