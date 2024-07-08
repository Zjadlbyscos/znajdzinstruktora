import React from "react";
import {
  FieldContainer,
  FormLabel,
  FormInput,
  SelectContainer,
  SelectOption,
  SelectedOption,
  ErrorMessage,
} from "../Register.styled";

const Field = ({ field, register, errors }) => (
  <FieldContainer key={field.name}>
    <FormLabel>{field.label}</FormLabel>
    {field.type === "select" ? (
      <SelectContainer
        {...register(field.name, field.validation)}
        hasError={!!errors[field.name]}
      >
        <SelectOption value="">Wybierz</SelectOption>
        {field.options.map((option) => (
          <SelectedOption key={option} value={option}>
            {option}
          </SelectedOption>
        ))}
      </SelectContainer>
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
);

export default Field;
