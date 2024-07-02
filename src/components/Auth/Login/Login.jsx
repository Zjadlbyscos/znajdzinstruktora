import React from "react";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { useDispatch } from "react-redux";
import { login as loginUser } from "../../../redux/auth/operations";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const formConfig = useFormConfig();

  const loginConfig = formConfig.filter(
    (field) => field.name === "email" || field.name === "password"
  );

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            {...register(field.name, { required: field.validation.required })}
            type={field.type}
            name={field.name}
          />
          {errors[field.name] && <span>To pole jest wymagane</span>}
        </div>
      ))}
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginForm;
