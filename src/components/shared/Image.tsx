import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
};

export default function Image({
  src,
  alt,
  width,
  height,
  className,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      {...(width && { width })}
      {...(height && { height })}
      {...(className && { className })}
    />
  );
}
