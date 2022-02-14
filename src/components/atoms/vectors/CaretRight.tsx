import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="2rem"
    height="2rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#303030" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 22a.999.999 0 0 1-.707-1.707L17.586 16l-4.293-4.293a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 14 22Z"
      fill="#CBD2D9"
    />
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={9}
      width={9}
      height={13}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22a.999.999 0 0 1-.707-1.707L17.586 16l-4.293-4.293a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 14 22Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgComponent;
