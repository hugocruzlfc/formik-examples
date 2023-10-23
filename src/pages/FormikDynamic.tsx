import Layout from "../components/Layout";
import { Form, Formik } from "formik";
import { getInputs } from "../utils/getInputs";
import Select from "../components/Select";
import RadioGroup from "../components/RadioGroup";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";

const { initialValues, inputs, validationSchema } = getInputs("login");

export const FormikDynamic = () => {
  return (
    <Layout title="Formik Dynamic">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form noValidate>
            {inputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                case "select":
                  return (
                    <Select
                      key={name}
                      label={props.label!}
                      name={name}
                      options={props.options!}
                    />
                  );

                case "radio-group":
                  return (
                    <RadioGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox":
                  return (
                    <CheckBox
                      label={props.label!}
                      key={name}
                      name={name}
                    />
                  );

                default:
                  return (
                    <Input
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
              }
            })}
            <button
              className="btn btn_submit"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};
