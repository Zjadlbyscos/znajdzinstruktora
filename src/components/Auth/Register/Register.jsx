import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useFormConfig } from "../../../hooks/useFormConfig";
import { registerUser } from "../../../redux/auth/operations";
import {
  RegisterWrapper,
  FieldContainer,
  FormLabel,
  FormInput,
  RegisterContainer,
  RegisterHeading,
  RegisterSpan,
  SelectContainer,
  SelectOption,
  SelectedOption,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  ErrorMessage,
  RequiredWrapper,
  RequiredSpan,
  RequiredP,
} from "./Register.styled";

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
    console.log(filteredData);
    dispatch(registerUser(filteredData));
  };

  return (
    <RegisterContainer>
      <RegisterHeading>Nie masz jeszcze konta?</RegisterHeading>
      <RegisterSpan>Zarejestruj się!</RegisterSpan>
      <RegisterWrapper onSubmit={handleSubmit(onSubmit)}>
        {formConfig.map((field) => (
          <FieldContainer key={field.name}>
            {field.type !== "checkbox" && <FormLabel>{field.label}</FormLabel>}
            {field.type === "select" ? (
              <SelectContainer hasError={!!errors[field.name]}>
                <SelectOption value="">Wybierz</SelectOption>
                {field.options.map((option) => (
                  <SelectedOption key={option} value={option}>
                    {option}
                  </SelectedOption>
                ))}
              </SelectContainer>
            ) : field.type === "checkbox" ? (
              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  {...register(field.name, field.validation)}
                  id={field.name}
                />
                <CheckboxLabel htmlFor={field.name}>
                  {field.label}
                </CheckboxLabel>
              </CheckboxContainer>
            ) : (
              <FormInput
                type={field.type}
                {...register(field.name, field.validation)}
                hasError={!!errors[field.name]}
              />
            )}
            {errors[field.name] && (
              <ErrorMessage>{errors[field.name].message}</ErrorMessage>
            )}
          </FieldContainer>
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
