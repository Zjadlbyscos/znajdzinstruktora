import React, { useEffect, useRef } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { editProfileConfig } from "../../../../hooks/editProfileConfig";
import { DateModalContainer } from "./DateModal.styled";
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
      console.log(event, "event");
      console.log(duration, "duration");
      console.log(instructorId, "instructorId");
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
      <div>
        <button onClick={handleClose}>X</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Rodzaj prowadzonych zajęć:</h4>
          <select id="classLevel" {...register("classLevel")}>
            {classLevel.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
          <h2>Obiekt:</h2>
          <select></select>
          <h2>Dodatkowe informacje:</h2>
          <input type="text" {...register("description")} />
          <button type="submit">Zapisz</button>
        </form>
      </div>
    </DateModalContainer>
  );
};
