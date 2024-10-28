import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="section-title" aria-label="Section Wallets">
      {title}
    </div>
  );
};

export default SectionTitle;
