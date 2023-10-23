import React from "react";
import { ErrorMessage, useField } from "formik";

export interface CheckBoxProps {
  label: string;
  name: string;
  [x: string]: unknown;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const [field] = useField(props);

  return (
    <label className="label_check">
      <input
        type="checkbox"
        {...field}
        {...props}
      />
      <span>{props.label}</span>
      <ErrorMessage
        name={props.name}
        component="span"
        className="error"
      />
    </label>
  );
};

export default CheckBox;
