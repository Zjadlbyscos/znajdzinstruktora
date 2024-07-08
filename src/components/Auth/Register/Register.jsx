import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { registerUser } from "../../../redux/auth/operations";
import {
  RegisterWrapper,
  RegisterContainer,
  RegisterHeading,
  RegisterSpan,
  RequiredWrapper,
  RequiredSpan,
  RequiredP,
} from "./Register.styled";
import Field from "./Fields/Field";
import CheckboxField from "./Fields/CheckboxField";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerFormConfig, registerTermsConfig } = useFormConfig();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { confirmPassword, ...filteredData } = data;
    dispatch(registerUser(filteredData));
  };

  return (
    <RegisterContainer>
      <RegisterHeading>Nie masz jeszcze konta?</RegisterHeading>
      <RegisterSpan>Zarejestruj się!</RegisterSpan>
      <RegisterWrapper onSubmit={handleSubmit(onSubmit)}>
        {registerFormConfig.map((field) => (
          <Field
            key={field.name}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
        {registerTermsConfig.map((field) => (
          <CheckboxField
            key={field.name}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
        <RequiredWrapper>
          <RequiredSpan>*</RequiredSpan>
          <RequiredP>- pole wymagane</RequiredP>
        </RequiredWrapper>
        <button type="submit">ZAREJESTRUJ</button>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default RegistrationForm;
