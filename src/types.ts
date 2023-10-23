export interface InputProps {
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;

  type: "text" | "radio-group" | "email" | "password" | "select" | "checkbox";
  typeValue?: "string" | "boolean";
  options?: Opt[];
  validations: Validation[];
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue";
  value?: string | number | boolean;
  message: string;
}
