import React from "react";
import { ErrorMessage, useField } from "formik";

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: unknown;
}

const Input: React.FC<InputProps> = (props) => {
  const [field] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="error"
      />
    </>
  );
};

export default Input;
