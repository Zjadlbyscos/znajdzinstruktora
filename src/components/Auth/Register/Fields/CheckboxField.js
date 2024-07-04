import React from "react";
import {
  FieldContainer,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  ErrorMessage,
} from "../Register.styled";

const CheckboxField = ({ field, register, errors }) => (
  <FieldContainer key={field.name}>
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        {...register(field.name, field.validation)}
        id={field.name}
      />
      <CheckboxLabel htmlFor={field.name}>{field.label}</CheckboxLabel>
    </CheckboxContainer>
    {errors[field.name] && (
      <ErrorMessage>{errors[field.name].message}</ErrorMessage>
    )}
  </FieldContainer>
);

export default CheckboxField;
