import { ReactNode } from "react";
import styled from "styled-components";

interface SelectTypes {
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
  name?: string;
  ref?: any;
  onChange?: any;
  children: ReactNode;
}
const DropDown = ({
  label,
  fullWidth,
  required,
  name,
  ref,
  onChange,
  children,
}: SelectTypes) => {
  return (
    <DropDown.Wrapper fullWidth={fullWidth}>
      <div className="form-group mb-4">
        {label && (
          <label>
            {label}
            <span className="text-danger">{required && "*"}</span>{" "}
          </label>
        )}
        <select
          onChange={(e) => onChange && onChange(e)}
          name={name}
          ref={ref}
          required={required}
          className="custom-select  mb-3"
        >
          {children}
        </select>
      </div>
    </DropDown.Wrapper>
  );
};

DropDown.Wrapper = styled.div<{ fullWidth?: boolean }>`
  .form-group {
    label {
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: 0.14px;
      text-align: left;
      color: #000000;
      margin-bottom: 5px;
    }
    select {
      width: ${(props) => (props.fullWidth ? "100%" : "500.3px")};
      font-size: 14px;
      line-height: 17px;
      color: #7b7b7b;
      padding: 1rem;
      padding-left: 2rem;
      width: 100%;
      display: block;
      transition: all 0.3s;
      box-shadow: 0px 3px 6px #0000000d;
      height: 60px;
      background: #ffffff;
      border: 1px solid #cbd2d9;
      box-sizing: border-box;
      border-radius: 5px;
      &:focus {
        outline: none;
        border: 0.5px solid #bec6df;
        background-color: none;
      }

      &:focus:invalid {
        border: 1px solid red;
      }

      &::-webkit-input-placeholder {
        color: #47486b;
        opacity: 0.4;
      }
      &:disabled {
        background-color: #dadceb;
        color: #47486b;
        cursor: not-allowed;
      }
    }
  }
  @media (max-width: 1280px) {
    .form-group {
      input {
        width: 100%;
      }
    }
  }
  @media (max-width: 520px) {
    .form-group {
      label {
        font-size: 13px !important;
      }
      select {
        width: 100%;
        height: 50px;
        padding: 0.6rem;
        padding-left: 10px;
        font-size: 13px;
      }
    }
  }
`;
export default DropDown;
