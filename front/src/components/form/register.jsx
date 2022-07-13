import Input from "./input";
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validate(values) {
      const { error } = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(6).required(),
        userName: Joi.string().min(2).required(),
      }).validate(values, {
        abortEarly: false,
      });

      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }

      return errors;
    },

    onSubmit(values) {
      console.log(values);
      navigate("/login");
    },
  });

  return (
    <div className="container text-center">
      <form
        noValidate
        autoComplete="off"
        className="form-signup"
        onSubmit={form.handleSubmit}
      >
        <img
          className="my-4 logo bg-dark"
          src="https://unitysro.net/wp-content/themes/armadon/assets/images/logos/logo-icon.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Registration</h1>
        <Input
          type="text"
          label="User Name"
          error={form.touched.userName && form.errors.userName}
          {...form.getFieldProps("userName")}
        ></Input>
        <Input
          name="email"
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
        ></Input>

        <button className="btn btn-lg btn-dark btn-block my-3" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
