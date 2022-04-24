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
    onChange: (e: any) => void;
}

const Select: VoidFunctionComponent<SelectProps> = ({
  label,
  options,
  placeholder,
  onChange,
}) => {

  const [showSelectHeader] = useState(true);
  const ref = useRef<HTMLDivElement>(null);


  return (
      <div className="select">
          <label className="select__label">{label}</label>
          <div className="select__options" ref={ref}>
     
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