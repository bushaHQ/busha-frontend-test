import React from "react";
import styled from "styled-components";

interface customOptions {
  value: string;
  label: string;
}
const Select: React.FC<{
  label: string;
  options: customOptions[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  select: string;
}> = ({ label, options, handleChange, select }) => {
  return (
    <SelectWrapper>
      <>
        <label className="select" htmlFor="slct">
          <p className="label__title">{label}</p>
          <select
            id="slct"
            role={"combobox"}
            onChange={handleChange}
            defaultValue={""}
          >
            <option value="" disabled>
              Select option
            </option>

            {options.map(({ value, label }, index) => {
              return (
                <option value={value} key={index}>
                  {label}
                </option>
              );
            })}
          </select>
          <svg>
            <use xlinkHref="#select-arrow-down"></use>
          </svg>
        </label>
        {/* <!-- SVG Sprites--> */}
        <svg className="sprites">
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1"></polyline>
          </symbol>
        </svg>
      </>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
padding:2rem 0;
.select {
  position: relative;
  min-width: 200px;
}

.label__title{
    margin:.5rem 0 .2rem 0;
    font-size:.9rem;
    font-size:800;
}
.select svg {
  position: absolute;
  right: 12px;
  top: calc(80% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #616E7C;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}
.select select {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}
.select select:required:invalid {
  color: #5a667f;
}
.select select option {
  color: #223254;
}
.select select option[value=""][disabled] {
  display: none;
}
.select select:focus {
  outline: none;
  border:1px solid #CBD2D9
  box-shadow: 0 0 0 2px rgba(0,119,255,0.2);
}
.select select:hover + svg {
  stroke: #616E7C;
}
.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

`;

export default Select;
