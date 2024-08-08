import styled from "styled-components";

export const EditProfileWrapper = styled.div``;

export const UserDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px 30px 0px;
  border-radius: 15px;
  background-color: var(--background-2);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RightProfileForm = styled.div`
  border-radius: 15px;
  background-color: var(--background-2);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const LeftProfileForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserName = styled.h2``;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px 0px 30px 0px;
`;
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 0 30px 0;
`;

export const Label = styled.label`
  margin: 15px 0 8px 0;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 15px;
`;
export const ContactGroup = styled.div`
  display: flex;
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  height: 225px;
`;

export const LanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
`;

export const ClassLevelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
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

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
  margin: 10px 0px 10px 0px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--button-primary);
  color: white;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  width: 80px;
  margin: 40px 0px 19px 0;
  &:hover {
    background-color: var(--button-hover);
  }
`;

export const ProfilePictureLabel = styled.label`
  display: inline-flex;
  width: 80%;
  height: 475px;
  background-color: var(--background-3);
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  color: white;

  &:hover {
    background-color: var(--background-4);
  }

  input {
    display: none;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--background-3);
  border-radius: 8px;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    font-size: 16px;
    color: #aaa;
  }
`;
