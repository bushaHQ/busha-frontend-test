import React from "react";

import { SelectProps } from "./Select.interface";

import { SelectDropdown } from "./Select.styles";

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <SelectDropdown
      role={"combobox"}
      onChange={onChange}
      value={value}
      {...props}
    >
      <option value={""}>select a wallet</option>
      {options?.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </SelectDropdown>
  );
};
