import React, { useRef } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { editProfileConfig } from "../../../../hooks/editProfileConfig";
import { DateModalContainer } from "./DateModal.styled";

export const DateModal = ({ handleClose, event, updateEvent, handleSave }) => {
  const modalRef = useRef();
  useOutsideClick(modalRef, handleClose, true);
  const { classLevel } = editProfileConfig();

  const handleClassLevelChange = (e) => {
    const classLevelValue = e.target.value;
    const titleValue = e.target.value;
    console.log(classLevelValue, titleValue);
    updateEvent({
      ...event,
      classLevel: e.target.value,
      title: e.target.value,
    });
  };
  const handleAdditionalInfoChange = (e) => {
    updateEvent({ ...event, additionalInfo: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <DateModalContainer ref={modalRef}>
      <div>
        <button onClick={handleClose}>X</button>
        <form onSubmit={handleSubmit}>
          <h4>Rodzaj prowadzonych zajęć:</h4>
          <select
            id="classLevel"
            value={event.classLevel || ""}
            onChange={handleClassLevelChange}
          >
            {classLevel.map((level, index) => (
              <option key={index} value={level} selected>
                {level}
              </option>
            ))}
          </select>
          <h2>Obiekt:</h2>
          <select></select>
          <h2>Dodatkowe informacje:</h2>
          <input type="text" onChange={handleAdditionalInfoChange} />
          <button type="submit">Zapisz</button>
        </form>
      </div>
    </DateModalContainer>
  );
};
