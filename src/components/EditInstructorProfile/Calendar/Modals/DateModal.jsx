import React, { useEffect, useRef } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { editProfileConfig } from "../../../../hooks/editProfileConfig";
import {
  Button,
  CloseButton,
  DateModalContainer,
  EventForm,
  InfoInput,
} from "./DateModal.styled";
import { selectInstructor } from "../../../../redux/instructors/selectors";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const DateModal = ({ handleClose, event, handleSave }) => {
  const modalRef = useRef();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { classLevel } = editProfileConfig();
  useOutsideClick(modalRef, handleClose, true);
  const instructor = useSelector(selectInstructor);

  const instructorId = instructor._id;

  useEffect(() => {
    if (event) {
      setValue("classLevel", Array.isArray(event.classLevel) || []);
      setValue("description", event.description || "");
      setValue("instructorId", instructorId || "");
      setValue("date", event.start || "");
      setValue("start", event.start || "");
      setValue("end", event.end || "");
      const duration = event.end
        ? (new Date(event.end) - new Date(event.start)) / (1000 * 60)
        : "";
      setValue("duration", duration || "");
      setValue("facilityId", "66cc6087e545db411fb91796");
      // poki co na sztywno - potem do zmiany
      setValue("avaiable", true);
      setValue("address", "ul. Testowa 1, 00-000 Warszawa" || "");
      // poki co na sztywno - potem do zmiany
    }
  }, [event, setValue, instructorId]);

  const onSubmit = (data) => {
    const preparedData = {
      ...data,
      classLevel: Array.isArray(data.classLevel)
        ? data.classLevel
        : [data.classLevel],
    };
    handleSave(preparedData);
  };

  return (
    <DateModalContainer ref={modalRef}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <EventForm onSubmit={handleSubmit(onSubmit)}>
        <h4>Rodzaj prowadzonych zajęć:</h4>
        <select id="classLevel" {...register("classLevel")}>
          {classLevel.map((level, index) => (
            <option key={index} value={level}>
              {level}
            </option>
          ))}
        </select>
        <h4>Obiekt:</h4>
        <select></select>
        <h4>Dodatkowe informacje:</h4>
        <InfoInput type="text" {...register("description")} />
        <Button type="submit">Zapisz</Button>
      </EventForm>
    </DateModalContainer>
  );
};
