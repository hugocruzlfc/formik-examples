import { useFormik } from "formik";
import * as Yup from "yup";

export const useConfigurationFormik = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      rol: "",
      gender: "",
      terms: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, "Min. 3 characters").required("Required"),
      email: Yup.string()
        .email("It should be a valid email")
        .required("Required"),
      password: Yup.string().min(6, "Min. 6 characters").required("Required"),
      terms: Yup.boolean().isTrue("You must accept the terms!"),
      rol: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { handleSubmit, errors, touched, getFieldProps };
};
