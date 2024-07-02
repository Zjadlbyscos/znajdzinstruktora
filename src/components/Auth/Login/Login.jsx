import React, { useState } from "react";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { useDispatch } from "react-redux";
import {
  login as loginUser,
  resetPasswordRequest as resetPasswordAction,
} from "../../../redux/auth/operations";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);
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

  const onSubmitLogin = (data) => {
    dispatch(loginUser(data));
  };

  const onSubmitResetPassword = (data) => {
    const { email } = data;
    dispatch(resetPasswordAction({ email }));
  };

  return (
    <div>
      {!isResetPassword ? (
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          {loginConfig.map((field) => (
            <div key={field.name}>
              <label>{field.label}</label>
              <input
                {...register(field.name, {
                  required: field.validation.required,
                })}
                type={field.type}
                name={field.name}
              />
              {errors[field.name] && <span>To pole jest wymagane</span>}
            </div>
          ))}
          <button type="submit">Zaloguj się</button>
          <button onClick={() => setIsResetPassword(true)}>
            Nie pamiętasz hasła?
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmitResetPassword)}>
          <div>
            <label>Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
            />
            {errors.email && <span>To pole jest wymagane</span>}
          </div>
          <button type="submit">Resetuj hasło</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
