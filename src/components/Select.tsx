import React from "react";
import { ErrorMessage, useField } from "formik";

type Opt = { value: string | number; desc: string };

export interface SelectProps {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: unknown;
}

const Select: React.FC<SelectProps> = ({ label, options, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label htmlFor={props.name || (props.id as string)}> {label} </label>

        <select
          {...field}
          {...props}
        >
          <option value="">--- Select ---</option>

          {options.map(({ desc, value }) => (
            <option
              value={value}
              key={value}
            >
              {desc}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage
        name={props.name}
        component="span"
        className="error"
      />
    </>
  );
};

export default Select;
