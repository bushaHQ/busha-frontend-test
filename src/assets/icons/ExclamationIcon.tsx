import * as React from "react"
import { SVGProps } from "react"

const ExclamationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={106}
    height={106}
    fill="none"
    {...props}
  >
    <circle cx={53} cy={53} r={50} stroke="#FFBDBD" strokeWidth={5} />
    <rect
      x={55.5}
      y={67}
      width={5}
      height={44}
      rx={2}
      transform="rotate(-180 55.5 67)"
      fill="#E12D39"
    />
    <rect
      x={55.5}
      y={83}
      width={5}
      height={8}
      rx={2}
      transform="rotate(-180 55.5 83)"
      fill="#E12D39"
    />
  </svg>
)

export default ExclamationIcon
