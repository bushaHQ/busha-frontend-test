import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.25rem"
    height="1.25rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.768.768a2.5 2.5 0 0 0-3.536 0L.768 8.232a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536L11.768.768ZM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="#D72C0D"
    />
  </svg>
);

export default SvgComponent;
