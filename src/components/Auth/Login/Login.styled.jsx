import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 370px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  button:nth-child(2) {
    background: none;
    border: none;
    letter-spacing: 0.02em;
    color: #9e6b84;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RemindPasswordContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
