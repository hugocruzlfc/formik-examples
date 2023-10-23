import { AnyObject, ObjectShape, Schema } from "yup";
import { InputProps } from "../types";
import * as Yup from "yup";
import { forms } from "./forms";

type YupBoolean = Yup.BooleanSchema<
  boolean | undefined,
  AnyObject,
  boolean | undefined
>;
type YupString = Yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;

type Form = "login";

const generateValidations = (field: InputProps): YupString | YupBoolean => {
  let schema: YupString | YupBoolean =
    Yup[field.typeValue ? field.typeValue : "string"](); // Yup.string()

  for (const rule of field.validations) {
    switch (rule.type) {
      case "isTrue":
        schema = (schema as YupBoolean).isTrue(rule.message) as unknown as
          | YupString
          | YupBoolean;
        break;

      case "isEmail":
        schema = (schema as YupString).email(rule.message) as
          | YupString
          | YupBoolean;
        break;

      case "minLength":
        schema = (schema as YupString).min(
          rule?.value as number,
          rule.message
        ) as YupString | YupBoolean;
        break;
      default:
        schema = schema.required(rule.message) as YupString | YupBoolean;
        break;
    }
  }

  return schema;
};

export const getInputs = (section: Form) => {
  const initialValues: { [key: string]: unknown } = {};

  const validationsFields: ObjectShape = {};

  for (const field of forms[section]) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }

  const validationSchema: Schema<{ [key: string]: unknown }> =
    Yup.object(validationsFields);

  return {
    validationSchema,
    initialValues,
    inputs: forms[section],
  };
};
