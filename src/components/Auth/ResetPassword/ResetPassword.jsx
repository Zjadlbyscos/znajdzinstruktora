import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeUserPasswordByReset } from "../../../redux/auth/operations";
import { useParams } from "react-router-dom";
import { useFormConfig } from "../../../hooks/useFormConfig";
import {
  FieldContainer,
  FormInput,
  FormLabel,
  ResetPasswordWrapper,
} from "./ResetPassword.styled";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const { registerFormConfig } = useFormConfig();

  const onSubmit = (data) => {
    const { confirmPassword, ...filteredData } = data;
    filteredData.resetToken = resetToken;
    dispatch(changeUserPasswordByReset(filteredData));
  };

  const resetConfig = registerFormConfig.filter(
    (field) =>
      field.name === "email" ||
      field.name === "password" ||
      field.name === "confirmPassword"
  );

  return (
    <ResetPasswordWrapper onSubmit={handleSubmit(onSubmit)}>
      {resetConfig.map((field) => (
        <FieldContainer key={field.name}>
          <FormLabel>{field.label}</FormLabel>
          <FormInput
            type={field.type}
            {...register(field.name, field.validation)}
          />
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </FieldContainer>
      ))}
      <button type="submit">Zmień hasło</button>
    </ResetPasswordWrapper>
  );
};

export default ResetPasswordForm;
