import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  LeftProfileForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  InfoWrapper,
  Button,
  EditProfileWrapper,
  RightProfileForm,
  ProfilePictureLabel,
  Section,
  ContactWrapper,
} from "./EdItInstructorProfile.styled";
import { selectUser } from "../../redux/auth/selectors";
import { editProfileConfig } from "../../hooks/editProfileConfig";

export const InstructorProfile = () => {
  const { register, handleSubmit } = useForm();
  const user = useSelector(selectUser);
  const { firstName, lastName } = user;
  const { kindOfClass, languages } = editProfileConfig();
  return (
    <Section>
      <Button type="submit">Zapisz</Button>
      <EditProfileWrapper>
        <LeftProfileForm onSubmit={handleSubmit()}>
          <FormGroup>
            <ProfilePictureLabel>
              <input type="file" {...register("profilePicture")} />
            </ProfilePictureLabel>
          </FormGroup>
          <InfoWrapper>
            <FormGroup>
              {firstName} {lastName}
              <TextArea id="bio" {...register("bio")} rows="4" />
            </FormGroup>
            <ContactWrapper>
              <FormGroup>
                <Label htmlFor="kontakt">Kontakt</Label>
                <Input type="text" id="kontakt" {...register("kontakt")} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="socialMedia">Social Media</Label>
                <Input
                  type="text"
                  id="socialMedia"
                  {...register("socialMedia")}
                />
              </FormGroup>
            </ContactWrapper>
          </InfoWrapper>
        </LeftProfileForm>
        <RightProfileForm>
          <FormGroup>
            <Label>Zajęcia</Label>
            <CheckboxGroup>
              {kindOfClass[0].options.map((option) => (
                <CheckboxLabel key={option}>
                  <CheckboxInput type="checkbox" id={option} />
                  {option}
                </CheckboxLabel>
              ))}
            </CheckboxGroup>
          </FormGroup>
          <FormGroup>
            <Label>Języki</Label>
            <CheckboxGroup>
              {languages[0].options.map((option) => (
                <CheckboxLabel key={option}>
                  <CheckboxInput type="checkbox" id={option} />
                  {option}
                </CheckboxLabel>
              ))}
            </CheckboxGroup>
          </FormGroup>
        </RightProfileForm>
      </EditProfileWrapper>
    </Section>
  );
};
