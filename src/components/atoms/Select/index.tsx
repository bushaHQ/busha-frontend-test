import React, { DetailedHTMLProps } from "react";
import { InputWrapper } from "./SelectStyles";

type optionType = Array<string | { key: string; value: string }>;

type Props = {
  label?: string;
  placeholder?: string;
  options?: optionType;
} & DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select = ({
  label = "",
  required = true,
  placeholder = "Select an option",
  options = [],
  ...props
}: Props) => {
  return (
    <InputWrapper>
      {label && <label>{label}</label>}
      <div className="input-container">
        <select {...props} {...{ required }}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, optionIndex) => (
            <option
              value={typeof option === "string" ? option : option.value}
              key={`select_option_${optionIndex}`}
            >
              {typeof option === "string" ? option : option.key}
            </option>
          ))}
        </select>
      </div>
    </InputWrapper>
  );
};

export default Select;
