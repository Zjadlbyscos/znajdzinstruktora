import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../../redux/instructors/operations";
import { selectInstructors } from "../../redux/instructors/selectors";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Input } from "../search/input";
import { InstructorsWrapper } from "./Instructors.styled";
import { useEffect, useState } from "react";

export const Instructors = () => {
  const instructors = useSelector(selectInstructors);
  const dispatch = useDispatch();
  const [filteredInstructors, setFilteredInstructors] = useState(instructors);

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return <GalleryElement elements={instructors} />;
  useEffect(() => {
    setFilteredInstructors(instructors);
  }, [instructors]);

  const filterInstructors = (searchTerm) => {
    const filtered = instructors.filter(
      (instructor) =>
        instructor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.discipline.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInstructors(filtered);
  };

  return (
    <InstructorsWrapper>
      <Input onChangeCallback={filterInstructors} />
      <GalleryElement elements={filteredInstructors} />
    </InstructorsWrapper>
  );
