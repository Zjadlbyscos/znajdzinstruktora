import React, { useState } from "react";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { useDispatch } from "react-redux";
import {
  login as loginUser,
  resetPasswordRequest as resetPasswordAction,
} from "../../../redux/auth/operations";
import { useForm } from "react-hook-form";
import {
  ButtonContainer,
  ErrorMessage,
  FieldContainer,
  FormInput,
  FormLabel,
  LoginContainer,
  LoginWrapper,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerFormConfig } = useFormConfig();

  const loginConfig = registerFormConfig.filter(
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
    <LoginContainer>
      {!isResetPassword ? (
        <LoginWrapper onSubmit={handleSubmit(onSubmitLogin)}>
          {loginConfig.map((field) => (
            <FieldContainer key={field.name}>
              <FormLabel>{field.label}</FormLabel>
              <FormInput
                {...register(field.name, {
                  required: field.validation.required,
                })}
                type={field.type}
                name={field.name}
              />
              {errors[field.name] && (
                <ErrorMessage>To pole jest wymagane</ErrorMessage>
              )}
            </FieldContainer>
          ))}
          <ButtonContainer>
            <button type="submit">Zaloguj się</button>
            <button onClick={() => setIsResetPassword(true)}>
              Nie pamiętasz hasła?
            </button>
          </ButtonContainer>
        </LoginWrapper>
      ) : (
        <LoginWrapper onSubmit={handleSubmit(onSubmitResetPassword)}>
          <FieldContainer>
            <FormLabel>Email</FormLabel>
            <FormInput
              {...register("email", { required: true })}
              type="email"
              name="email"
            />
            {errors.email && <ErrorMessage>To pole jest wymagane</ErrorMessage>}
          </FieldContainer>
          <button type="submit">Resetuj hasło</button>
        </LoginWrapper>
      )}
    </LoginContainer>
  );
};

export default LoginForm;
