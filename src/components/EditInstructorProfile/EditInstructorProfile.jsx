import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FiPhone } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import {
  LeftProfileForm,
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
import { selectInstructor } from "../../redux/instructors/selectors";
import { Calendar } from "./Calendar/Calendar";

export const InstructorProfile = () => {
  const user = useSelector(selectUser);
  const instructor = useSelector(selectInstructor);

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

  const id = user.instructorId;

  useEffect(() => {
    if (user.isInstructor) {
      dispatch(getInstructorById(id));
    }
  }, [dispatch, id, user.isInstructor]);

  useEffect(() => {
    if (instructor) {
      console.log(instructor);
      setValue("id", id || "");
      setValue("bio", instructor.bio || "");
      setValue("phoneNumber", instructor.phoneNumber || "");
      setValue("email", instructor.email || "");
      setValue("instagram", instructor.instagram || "");
      setValue("tiktok", instructor.tiktok || "");
      setValue("youtube", instructor.youtube || "");
      setValue("facebook", instructor.facebook || "");
      setValue("image", instructor.image || "");

      const classLevels = instructor.classLevel;
      const languages = instructor.languages;

      setValue("classLevel", classLevels);
      setValue("languages", languages);
    }
  }, [instructor, id, setValue]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("image", file);
    } else {
      setValue("image", null);
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
      <EditProfileWrapper>
        <LeftProfileForm onSubmit={handleSubmit(onSubmit)}>
          <ButtonWrapper>
            <Button type="submit">ZAPISZ</Button>
          </ButtonWrapper>
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
              {firstName}
              {lastName}
            </UserName>

            <TextArea
              id="bio"
              {...register("bio")}
              placeholder="  Napisz Coś o Sobie"
            />

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
                <FaFacebook />
                <Input id="facebook" type="text" {...register("facebook")} />
              </ContactGroup>
            </ContactWrapper>
          </InfoWrapper>
        </LeftProfileForm>
        <RightProfileForm>
          <div>
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
          </div>
          <div>
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
          </div>
        </RightProfileForm>
      </EditProfileWrapper>
      <Calendar />
    </>
  );
};
