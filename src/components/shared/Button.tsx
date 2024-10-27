import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <button className="button">{title}</button>;
};

export default Button;
