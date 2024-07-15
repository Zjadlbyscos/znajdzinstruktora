import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const EditProfileWrapper = styled.div`
  display: flex;
`;

export const RightProfileForm = styled.div``;

export const LeftProfileForm = styled.form`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 442px;
  height: 230px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfilePictureLabel = styled.label`
  display: inline-block;
  width: 302px;
  height: 426px;
  background-color: var(--background-3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    background-color: var(--background-4);
    transform: background-color 0.5s;
  }

  input {
    display: none;
  }
`;
