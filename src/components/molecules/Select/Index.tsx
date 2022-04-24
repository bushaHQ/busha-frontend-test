import { useRef, useState, VoidFunctionComponent } from "react";
import './Select.scss'

export type SelectItemType = {
    label: string; 
    value: string
}

interface SelectProps {
    label: string;
    options: SelectItemType[];
    placeholder?: string;
    onChange: () => void;
}

const Select: VoidFunctionComponent<SelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
}) => {
  const checkOptions = options.some((value: any) => {
    return typeof value == "object";
  });

  const [showSelectHeader] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkValueSelected = ref.current?.children[1].value;
//     if (!checkValueSelected.includes("null")) {
//       setShowSelectHeader(false);
//     }
//   }, [ref.current?.children[1].value]);

  return (
      <div className="select">
          <label className="select__label">{label}</label>
          <div className="select__options" ref={ref}>
            {/* <div className="select__icon">
                <ArrowDownIcon />  
            </div> */}
     
            <select className="select__form" onChange={onChange}>
                {showSelectHeader && (
                <option value="null">{placeholder}</option>
                )}
            
            
             {options?.map(((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                )))
             }
        </select>
        </div>
    </div>
  );
};

export default Select;