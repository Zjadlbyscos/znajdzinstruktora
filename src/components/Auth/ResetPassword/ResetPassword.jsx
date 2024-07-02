import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeUserPasswordByReset } from "../../../redux/auth/operations";
import { useParams } from "react-router-dom";
import { useFormConfig } from "../../../hooks/useFormConfig";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const formConfig = useFormConfig();

  const onSubmit = (data) => {
    const { confirmPassword, ...filteredData } = data;
    filteredData.resetToken = resetToken;
    dispatch(changeUserPasswordByReset(filteredData));
  };

  const resetConfig = formConfig.filter(
    (field) =>
      field.name === "email" ||
      field.name === "password" ||
      field.name === "confirmPassword"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {resetConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            {...register(field.name, field.validation)}
          />
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </div>
      ))}
      <button type="submit">Zmień hasło</button>
    </form>
  );
};

export default ResetPasswordForm;
