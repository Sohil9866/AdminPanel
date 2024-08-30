import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Please enter your email"),
  password: Yup.string().required("Must be of 8 words"),
});

export const SignupSchema = Yup.object({
    email: Yup.string()
    .email("Invalid Email Format")
    .required("Please enter your email"),
  password: Yup.string()
  .required("Must be of 8 words"),
  name: Yup.string()
  .required("Required"),
  phone: Yup.string()
  .required("Required"),
  address: Yup.string()
  .required("Required"), 
});
