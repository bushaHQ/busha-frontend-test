import * as React from "react"
import { SVGProps } from "react"

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.483 12.989a1.764 1.764 0 0 1-2.494 2.494L8 10.494l-4.989 4.99a1.764 1.764 0 0 1-2.494-2.495L5.506 8 .516 3.011A1.764 1.764 0 1 1 3.012.517L8 5.506l4.989-4.99a1.764 1.764 0 0 1 2.494 2.495L10.494 8l4.99 4.989Z"
      fill={props.color}
    />
  </svg>
)

export default CloseIcon