import React from "react";

interface ButtonProps {
  title: string;
  isLoading?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button = ({
  title,
  onClick,
  isLoading,
  type = "button",
}: ButtonProps) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {isLoading ? <span aria-label="Loading...">Loading...</span> : title}
    </button>
  );
};

export default Button;
