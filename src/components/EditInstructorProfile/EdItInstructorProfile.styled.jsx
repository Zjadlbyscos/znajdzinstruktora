import styled from "styled-components";

export const EditProfileWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 18px;
  }
`;

export const LeftProfileForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: var(--background-2);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1440px) {
    flex: 0 0 70%;
    margin-bottom: 0;
  }
`;

export const RightProfileForm = styled.div`
  background-color: var(--background-2);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: relative;
  @media (min-width: 1440px) {
    flex: 0 0 30%;
  }
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 15px;
  background-color: var(--background-2);
  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 0;
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const UserName = styled.h2``;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px 0px 30px 0px;
  @media (min-width: 1440px) {
    padding: 0;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 0 30px 0;
  @media (min-width: 1440px) {
    padding: 0;
    align-items: flex-start;
  }
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
  width: 70vw;
  height: 225px;
  @media (min-width: 1440px) {
    width: 30vw;
    height: 442px;
  }
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
  @media (min-width: 1440px) {
  }
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
  @media (min-width: 1440px) {
    position: relative;
    margin: 0;
    top: -50px;
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

  @media (min-width: 1440px) {
    margin: 0;
    width: 302px;
    max-width: 100%;
    height: 75%;
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
