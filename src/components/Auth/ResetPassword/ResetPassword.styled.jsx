import styled from "styled-components";

export const ResetPasswordWrapper = styled.form`
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
