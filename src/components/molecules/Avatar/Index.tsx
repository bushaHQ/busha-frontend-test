import { VoidFunctionComponent } from "react";
import './Avatar.scss'


interface AvatarProps {
    name?: string;
    imageUrl?: string;
}

const Avatar : VoidFunctionComponent<AvatarProps> = ({ name, imageUrl }) => {
  return (
      <div className="avatar">
        {imageUrl && (
          <img className="avatar__image" alt="avatar" src={imageUrl} />
        )}
        {name && (
          <p className="avatar__text">{name?.substring(0, 1)}</p>
        )}
      </div>
  );
};

export default Avatar;