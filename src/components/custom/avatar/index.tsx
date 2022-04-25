/** @format */

import { Circle } from "./avatar.styles";

interface IAvatarProps {
  text: string;
}

const Avatar = ({ text }: IAvatarProps) => {
  return (
    <Circle>
      <span>{text[0]}</span>
    </Circle>
  );
};

export default Avatar;
