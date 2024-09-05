import React, { useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectFacilities } from "../../../../redux/facilities/selectors";
import { fetchFacilities } from "../../../../redux/facilities/operations";

export const DateModal = ({ handleClose, event, handleSave }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { classLevel } = editProfileConfig();
  useOutsideClick(modalRef, handleClose, true);
  const instructor = useSelector(selectInstructor);
  const facilities = useSelector(selectFacilities);
  const [selectedFacility, setSelectedFacility] = useState("");
  const [address, setAddress] = useState("");

  const instructorId = instructor._id;

  useEffect(() => {
    dispatch(fetchFacilities());
  }, [dispatch]);

  useEffect(() => {
    if (event) {
      setValue(
        "classLevel",
        Array.isArray(event.classLevel) ? event.classLevel : []
      );
      setValue("description", event.description || "");
      setValue("instructorId", instructorId || "");
      setValue("date", event.start || "");
      setValue("start", event.start || "");
      setValue("end", event.end || "");
      const duration = event.end
        ? (new Date(event.end) - new Date(event.start)) / (1000 * 60)
        : "";
      setValue("duration", duration || "");
      setValue("facilityId", facilities.length > 0 ? facilities[0]._id : "");
      setSelectedFacility(facilities.length > 0 ? facilities[0]._id : "");
      setValue("avaiable", true);
      setValue("address", facilities.length > 0 ? facilities[0].city : "");
      setAddress(facilities.length > 0 ? facilities[0].city : "");
    }
  }, [event, setValue, instructorId, facilities]);

  const handleFacilityChange = (e) => {
    const selectedId = e.target.value;
    setSelectedFacility(selectedId);
    const selected = facilities.find((facility) => facility._id === selectedId);
    if (selected) {
      setAddress(selected.city);
      setValue("address", selected.city);
    }
  };

  const onSubmit = (data) => {
    const preparedData = {
      ...data,
      address,
      classLevel: Array.isArray(data.classLevel)
        ? data.classLevel.filter((level) => level !== null)
        : [data.classLevel].filter((level) => level !== null),
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
        <select
          id="facility"
          {...register("facilityId")}
          onChange={handleFacilityChange}
          value={selectedFacility}
        >
          {facilities.map((facility, index) => (
            <option key={index} value={facility._id}>
              {facility.name}
            </option>
          ))}
        </select>
        <h4>Dodatkowe informacje:</h4>
        <InfoInput type="text" {...register("description")} />
        <Button type="submit">Zapisz</Button>
      </EventForm>
    </DateModalContainer>
  );
};
