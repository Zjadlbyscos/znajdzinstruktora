import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FiPhone } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
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
  ButtonWrapper,
  Button,
  EditProfileWrapper,
  ProfilePictureLabel,
  ContactWrapper,
  ImagePreview,
  UserName,
  UserDetailsWrapper,
  ContactGroup,
  RightProfileForm,
  LanguagesContainer,
} from "./EdItInstructorProfile.styled";
import { selectUser } from "../../redux/auth/selectors";
import { editProfileConfig } from "../../hooks/editProfileConfig";
import {
  getInstructorById,
  updateInstructorProfile,
} from "../../redux/instructors/operations";
import { selectInstructors } from "../../redux/instructors/selectors";

export const InstructorProfile = () => {
  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: user.phoneNumber || "",
      email: user.email || "",
      classLevel: [],
      languages: [],
    },
  });
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const { firstName, lastName } = user;
  const { classLevel, languages } = editProfileConfig();

  const instructor = useSelector(selectInstructors);
  const id = instructor.id;
  console.log(id, "id");

  useEffect(() => {
    dispatch(getInstructorById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (instructor) {
      setValue("id", instructor.id || "");
      setValue("bio", instructor.bio || "");
      setValue("phoneNumber", instructor.phoneNumber || "");
      setValue("email", instructor.email || "");
      setValue("instagram", instructor.instagram || "");
      setValue("tiktok", instructor.tiktok || "");
      setValue("youtube", instructor.youtube || "");
      setValue("facebook", instructor.facebook || "");
      setValue("photo", instructor.photo || "");

      const classLevels = instructor.classLevel;
      const languages = instructor.languages;

      setValue("classLevel", classLevels);
      setValue("languages", languages);
    }
  }, [instructor, setValue]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("photo", file);
    } else {
      setValue("photo", null);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      if (data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (Array.isArray(data[key])) {
        formData.append(key, JSON.stringify(data[key]));
      } else if (data[key] !== "null" && data[key] !== "") {
        formData.append(key, data[key]);
      }
    }

    dispatch(updateInstructorProfile({ id, data: formData }));
  };

  const watchedClassLevel = watch("classLevel", []);
  const watchedLanguages = watch("languages", []);

  return (
    <>
  <ButtonWrapper>
  <Button type="submit">ZAPISZ</Button>
  </ButtonWrapper>
   
    <EditProfileWrapper>

      <LeftProfileForm onSubmit={handleSubmit(onSubmit)}>
     
        {/* <UserDetailsWrapper> */}
          <ProfilePictureLabel>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview ? (
              <ImagePreview>
                <img src={preview} alt="Profile Preview" />
              </ImagePreview>
            ) : (
              <span>Wybierz zdjęcie</span>
            )}
          </ProfilePictureLabel>
          <InfoWrapper>
            <UserName>
              {firstName}Zuzanna Maciejczyk{lastName}
              {/* usuń imię i nazwisko na sztywno */}
            </UserName>
            {/* <FormGroup> */}
              <TextArea id="bio" {...register("bio")} placeholder="  Napisz Coś o Sobie" />
            {/* </FormGroup> */}
            <ContactWrapper>
              <ContactGroup>
                <FiPhone />
                <Input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && <span>To pole jest wymagane</span>}
              </ContactGroup>
              <ContactGroup>
                <FaRegEnvelope />

                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>To pole jest wymagane</span>}
              </ContactGroup>
              <ContactGroup>
                <LuInstagram />
                <Input id="instagram" type="text" {...register("instagram")} />
              </ContactGroup>
              <ContactGroup>
              <FaFacebook/>
              <Input id="facebook" type="text" {...register("facebook")} />
              </ContactGroup>
            </ContactWrapper>
          </InfoWrapper>
        {/* </UserDetailsWrapper> */}
       
      </LeftProfileForm>
      <RightProfileForm>
        <FormGroup>
          <Label>Poziomy nauczania</Label>
          <CheckboxGroup>
            {classLevel.map((level, index) => (
              <React.Fragment key={index}>
                <CheckboxInput
                  id={`classLevel_${index}`}
                  type="checkbox"
                  value={level}
                  {...register("classLevel")}
                  checked={watchedClassLevel.includes(level)}
                />
                <CheckboxLabel htmlFor={`classLevel_${index}`}>
                  {level}
                </CheckboxLabel>
              </React.Fragment>
            ))}
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label>Języki</Label>
          <LanguagesContainer>
            {languages.map((language, index) => (
              <React.Fragment key={index}>
                <CheckboxInput
                  id={`language_${index}`}
                  type="checkbox"
                  value={language}
                  {...register("languages")}
                  checked={watchedLanguages.includes(language)}
                />
                <CheckboxLabel htmlFor={`language_${index}`}>
                  {language}
                </CheckboxLabel>
              </React.Fragment>
            ))}
          </LanguagesContainer>
        </FormGroup>
      </RightProfileForm>
    </EditProfileWrapper>
    </>
  );
};
