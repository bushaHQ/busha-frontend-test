import * as React from "react"
import { SVGProps } from "react"

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.185c0-.303-.098-.606-.293-.837-.39-.464-1.023-.464-1.414 0L6 5.436 1.707.348C1.317-.116.684-.116.293.348c-.39.463-.39 1.212 0 1.675l5 5.926c.391.464 1.023.464 1.414 0l5-5.926c.195-.23.293-.534.293-.838Z"
      fill="#616E7C"
    />
  </svg>
)

export default ArrowDownIcon