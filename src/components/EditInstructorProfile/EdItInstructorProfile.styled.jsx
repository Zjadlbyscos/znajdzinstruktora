import styled from "styled-components";

export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const UserDetailsWrapper = styled.div`
  /* 
   DELETE
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
  border-radius: 8px;
  background-color: var(--background-2);
  @media (min-width: 1024px) {
    flex-direction: row;

  }  */
`;

export const LeftProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--background-2);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    width: 70%;
    gap: 2vw;
    height: 600px;
  }
`;
export const ProfilePictureLabel = styled.label`
  display: inline-flex;
  max-width: 287px;
  width: 100%;
  height: 287px;
  background-color: var(--background-3);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  @media (min-width: 760px) {
    width: 302px;
    height: 426px;
  }
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

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 286px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    max-width: 50%;
  }
`;

export const UserName = styled.h2``;

export const TextArea = styled.textarea`
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  height: 225px;
  @media (min-width: 1024px) {
    max-width: 302px;
    height: 230px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
    height: 330px;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding-top: 15px;

  @media (min-width: 1440px) {
  }
`;
export const ContactGroup = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  & svg {
    color: var(--primary-color);
    width: 40px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`;

///////do tego ////

export const RightProfileForm = styled.div`
  background-color: var(--background-2);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    width: 30%;
    height: 600px;
  }
`;
export const FormGroup = styled.div`
  /* 
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 10px 0;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    align-items: flex-start;
  } */
`;

export const Label = styled.label`
  margin: 15px 0 8px 0;
  font-weight: bold;
`;

export const LanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  gap: 10px;
  margin-top: 8px;
`;
/* 
export const ClassLevelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px; 
`; */

export const CheckboxLabel = styled.label`
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
    top: 45%;
    left: 7px;
    transform: translateY(-50%) rotate(45deg);
    color: var(--primary-color);
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
  gap: 10px;
  margin: 10px 0px 10px 0px;

  @media (min-width: 1440px) {
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;
export const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--button-primary);
  color: white;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  width: 80px;

  &:hover {
    background-color: var(--button-hover);
  }
  /* @media (min-width: 1440px) {
    position: relative;
    margin: 0;
    top: -50px;
  } */
`;
