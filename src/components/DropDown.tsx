import styled from "styled-components";

interface DataTypes {
  name: string;
  value: string;
}
interface SelectTypes {
  label?: string;
  options: any[];
  fullWidth?: boolean;
  required?: boolean;
  placeholder?: string;
  name?: string;
  ref?: any;
  onChange?: any;
}
const DropDown = ({
  label,
  //   value,
  options,
  fullWidth,
  required,
  placeholder,
  name,
  ref,
  onChange,
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
          <option>{placeholder}</option>
          {options.map((data: DataTypes, i) => (
            <option key={i} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
    </DropDown.Wrapper>
  );
};

DropDown.Wrapper = styled.div<any>`
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
      width: ${(props) => (props.fullWidth ? props.fullWidth : "500.3px")};
      font-size: 14px;
      line-height: 17px;
      font-family: Orkney;
      color: #7b7b7b;
      padding: 1rem;
      padding-left: 2rem;
      border-radius: 1rem;
      border: 1px solid #bec6df;
      width: 100%;
      display: block;
      transition: all 0.3s;
      box-shadow: 0px 3px 6px #0000000d;
      // height: 4.9rem;
      height: 60px;
      background: #f9fffb;
      &:focus {
        outline: none;
        border: 0.5px solid #bec6df;
        background-color: none;
      }

      &:focus:invalid {
        border: 1px solid red;
      }

      &::-webkit-input-placeholder {
        font-family: Orkney;
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
        height: 30px;
        padding-left: 10px;
        font-size: 13px;
      }
    }
  }
`;
export default DropDown;
