import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const RegisterHeading = styled.h2``;

export const RegisterSpan = styled.p``;

export const RegisterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
  }
  button {
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    @media (min-width: 768px) {
      width: 100%;
      max-width: 370px;
    }
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 11px;
`;

export const FormInput = styled.input`
  border-radius: 5px;
  margin-bottom: 18px;
  padding: 12px 8px;
  border: 1px solid black;
  border-color: ${(props) => (props.hasError ? "red" : "black")};
`;

export const SelectContainer = styled.select`
  margin-bottom: 10px;
  padding: 12px 8px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const SelectOption = styled.option``;

export const SelectedOption = styled.option``;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

export const CheckboxLabel = styled.label`
  margin: 10px 0px 0px 8px;
  cursor: pointer;
  position: relative;
  padding-left: 32px;
  &:before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid black;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxLabel}::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    top: 50%;
    left: 7px;
    transform: translateY(-50%) rotate(45deg);
  }

  @media (min-width: 768px) {
    width: 10px;
    height: 20px;
  }

  &:checked + ${CheckboxLabel}:before {
    background-color: var(--primary-color);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const RequiredWrapper = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  margin-bottom: 10px;
`;

export const RequiredSpan = styled.span`
  margin-right: 0.25rem;
  color: red;
`;

export const RequiredP = styled.p`
  color: red;
  margin: 0;
  display: inline;
`;
