import { Button } from "./button";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../schemas";
import { useFormik } from "formik";
import { authStore } from "../store";
const SignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };
  const error = authStore.getState().error;
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        await authStore.getState().signup(values);
        console.log(error);
        if (error) {
          alert(error);
        } else {
          navigate("/login");
        }
      },
    });

  return (
    <div className="absolute bg-white rounded-2xl shadow-lg  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 flex-col px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            err={errors.name && touched.name ? `${errors.name}` : null}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            err={errors.email && touched.email ? `${errors.email}` : null}
          />
          <Input
            label="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            err={
              errors.password && touched.password ? `${errors.password}` : null
            }
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            err={errors.phone && touched.phone ? `${errors.phone}` : null}
          />
          <Input
            label="Address"
            name="address"
            type="adress"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            err={errors.address && touched.address ? `${errors.address}` : null}
          />
          <Button name="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
