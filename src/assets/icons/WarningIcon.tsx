import * as React from "react"
import { SVGProps } from "react"

const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg
        width={20}
        height={20}
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.768.768a2.5 2.5 0 0 0-3.536 0L.768 8.232a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536L11.768.768ZM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="#D72C0D"
        />
      </svg>
)

export default WarningIcon
