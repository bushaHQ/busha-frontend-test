import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <div className="section-title">{title}</div>;
};

export default SectionTitle;
