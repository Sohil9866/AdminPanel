import { Button } from "./button";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "./input";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import React, { useEffect, useState } from "react";
import assests from "../assets/assets";
import Slider from "./slider/Slider";
import { authStore } from "../store";

const LoginForm = () => {
  const { Food1, Logo, eyeOpen, eyeClose } = assests;
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,

      onSubmit: async (values) => {
        await authStore.getState().login(values);
        const error = authStore.getState().error;
        if (error) {
          alert(error);
        } else {
          navigate("/");
        }
      },
    });
  const [visible, setVisible] = useState(false);
  return (
    !token && (
      <div className="flex h-screen bg-white">
        <Slider />
        <div className="w-1/2 h-full grid grid-rows-3 justify-center">
          <div className="mt-10">
            <img src={Logo} />
          </div>
          <div className="w-[445px] h-[425px]">
            <div className="-mt-[46px] mb-[46px]">
              <h1 className=" font-semibold text-3xl text-[#16151C]">
                Welcome back
              </h1>
              <span className=" font-light font-josefin ">
                Please enter your email and password to continue
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-7 font-josefin"
            >
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                err={errors.email && touched.email ? `${errors.email}` : null}
              />
              <div className="relative">
                <Input
                  label="Password"
                  name="password"
                  type={visible ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  err={
                    errors.password && touched.password
                      ? `${errors.password}`
                      : null
                  }
                />
                <button
                  type="button"
                  className="absolute top-6 right-2"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <img src={eyeOpen} /> : <img src={eyeClose} />}
                </button>
              </div>

              <div className="flex justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="size-6 accent-[#0D693C]" />
                  Remember Me
                </label>

                <p className="text-[#0D693C]">Forget Password?</p>
              </div>
              <div>
                <Button name="Login" />
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-black">
              <span className="font-thin">Dont have an account? </span>
              <NavLink
                to={"/signup"}
                className="font-semibold text-green-900 hover:text-green-900"
              >
                Sign-Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginForm;
