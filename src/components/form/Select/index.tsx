import { SelectWrapper } from "./Select.style";

type SelectProps = {
  label: string;
  value: string | null;
  placeholder: string;
  onChange: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
};

export default function Select({
  label,
  placeholder,
  options,
  onChange,
}: SelectProps) {
  return (
    <SelectWrapper>
      <label>{label}</label>
      <select
        defaultValue=""
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}
