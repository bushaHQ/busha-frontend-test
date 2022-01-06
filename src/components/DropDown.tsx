import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as DownArrow } from "../assets/img/downArrow.svg";

export interface DropDownObj {
  label: string;
  value: string | number;
}

interface DropdownProps {
  defaultText: string;
  dropDownItems: Array<DropDownObj>;
  onSelect: (selected: DropDownObj) => void;
  value?: string;
}

const useClickOutside = (handler: any) => {
  const domNode = useRef<any>();

  useEffect(() => {
    const maybeHandler = (event: any) => {
      if (!domNode?.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Dropdown = (props: DropdownProps) => {
  const { defaultText, dropDownItems, onSelect, value } = props;
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(
    value ? value : dropDownItems[0]?.label
  );
  const domNode = useClickOutside(() => {
    setIsActive(false);
  });

  const handleSelection = (selectedItem: DropDownObj) => {
    setSelected(selectedItem.label);
    onSelect(selectedItem);
  };

  return (
    <Wrapper>
      <label htmlFor={defaultText}>{defaultText} </label>
      <div ref={domNode} onClick={() => setIsActive(!isActive)}>
        <div className={"select-box"}>
          <div className={`${isActive ? "active" : ""} options-container`}>
            {dropDownItems.map((item, index) => {
              const { label } = item;

              return (
                <div
                  key={index}
                  className="option"
                  onClick={() => handleSelection(item)}
                >
                  <input
                    type="radio"
                    className="radio"
                    id={label}
                    name="defaultName"
                  />
                  <label htmlFor={label}>{label} </label>
                </div>
              );
            })}
          </div>
          <div
            className={`
          ${isActive ? "active" : ""}
          ${selected === defaultText ? "" : "item-selected"}
           selected`}
          >
            {selected}
            <DownArrow className="icon text-dark" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: inherit;
  margin-top: 2rem;
  .select-box {
    position: relative;
  }

  .select-box .options-container {
    position: absolute;
    top: 120%;
    z-index: 10;
    background: white;
    color: black;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    overflow: hidden;
    box-shadow: 0px 3px 10px rgba(122, 122, 122, 0.2);
    border: 1px solid #cbd2d9;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .selected {
    background: #ffffff;
    border: 1px solid #a5a8a3;
    box-sizing: border-box;
    border-radius: 8px;
    height: 64px;
    font-size: 16px;
    color: gray;
    justify-content: space-between;
    .icon {
      color: #08cb7b;
    }
  }
  .selected.active {
    background-color: #e8eaff;
    /* border: 1px solid #1A4CFF; */
    border: none;
  }
  .selected.item-selected {
    border: 0.5px solid #bec6df;
  }

  .select-box .options-container.active {
    max-height: 200px;
    opacity: 1;
    overflow-y: scroll;
  }

  .select-box .options-container.active + .selected::after {
    transform: rotateX(180deg);
  }

  .select-box .options-container::-webkit-scrollbar {
    width: 8px;
    background: white;
    border-radius: 0 8px 8px 0;
  }

  .select-box .options-container::-webkit-scrollbar-thumb {
    border-radius: 0 8px 8px 0;
  }

  .select-box .option,
  .selected {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
  }

  .select-box .option:hover {
    background: #f2f2f2;
    color: black;
  }

  .select-box label {
    cursor: pointer;
    font-size: 16px;
    color: #47486b;
  }

  .select-box .option .radio {
    display: none;
  }
`;

export default Dropdown;
