import React from "react";
import { useField, ErrorMessage } from "formik";

type Opt = { value: string | number; desc: string };

export interface RadioGroupProps {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: unknown;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <div className="radio-group">
      <b>{label}</b>
      {options.map((opt) => (
        <label key={opt.value}>
          <input
            {...field}
            {...props}
            type="radio"
            value={opt.value}
            checked={opt.value === field.value}
          />
          {opt.desc}
        </label>
      ))}
      <ErrorMessage
        name={props.name}
        component="span"
        className="error"
      />
    </div>
  );
};

export default RadioGroup;
