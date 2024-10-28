import React from "react";

interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  return <div className="avatar">{name.charAt(0)}</div>;
};

export default Avatar;
