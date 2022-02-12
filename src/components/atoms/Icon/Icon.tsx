import React from "react";

import {
  Logo,
  ErrorIcon,
  ErrorSign,
  CloseIcon,
  DownArrow,
  RightArrow,
} from "./assets";

import { IconProps, IconType } from "./Icon.interface";

export const Icon: React.FC<IconProps & { name: IconType }> = ({
  name,
  ...props
}) => {
  switch (name) {
    case "logo": {
      return <Logo {...props} />;
    }

    case "error": {
      return <ErrorIcon {...props} />;
    }

    case "right-arrow": {
      return <RightArrow {...props} />;
    }

    case "down-arrow": {
      return <DownArrow {...props} />;
    }

    case "close": {
      return <CloseIcon {...props} />;
    }

    case "error-sign": {
      return <ErrorSign {...props} />;
    }

    default:
      return null;
  }
};
