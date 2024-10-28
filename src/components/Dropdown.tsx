import React, { FC, useState } from "react";
import { Wallet } from "../types";

interface SelectProps {
  options: Array<Wallet>;
  setSelected: (value: string) => void;
}

const Dropdown: FC<SelectProps> = ({ options, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Wallet | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: Wallet) => {
    setSelectedValue(value);
    setSelected(value.currency);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div
        className={`select-box ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="selected-option">
          {selectedValue ? selectedValue.name : "Select an option"}
        </div>
        <div className="arrow">{isOpen ? "▲" : "▼"}</div>
      </div>
      <div className={`dropdown ${isOpen ? "show" : ""}`}>
        {options.map((option: Wallet, index: number) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
