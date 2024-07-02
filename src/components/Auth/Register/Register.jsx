import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { registerUser } from "../../../redux/auth/operations";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formConfig = useFormConfig();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { confirmPassword, ...filteredData } = data;
    dispatch(registerUser(filteredData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "select" ? (
            <select {...register(field.name, field.validation)}>
              <option value="">Wybierz</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              {...register(field.name, field.validation)}
            />
          )}
          {errors[field.name] && <p>{errors[field.name].message}</p>}
        </div>
      ))}
      <button type="submit">Zarejestruj</button>
    </form>
  );
};

export default RegistrationForm;
