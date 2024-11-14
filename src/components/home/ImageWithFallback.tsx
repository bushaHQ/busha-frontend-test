import { useState } from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

interface ImageWithFallbackT {
  src: string;
  alt: string;
  fallback: string;
  color?: string
}

const ImageWithFallback = ({ src, alt, fallback, color }: ImageWithFallbackT) => {
  const [useFallback, setUseFallback] = useState(true);

  const handleError = () => {
    setUseFallback(true);
  };

  if (useFallback) {
    return <Avatar color={color} name={fallback} />;
  }

  return <Icon src={src} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
