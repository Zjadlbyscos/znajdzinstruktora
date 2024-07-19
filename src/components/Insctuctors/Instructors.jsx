import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../../redux/instructors/operations";
import { selectInstructors } from "../../redux/instructors/selectors";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { useEffect } from "react";

export const Instructors = () => {
  const instructors = useSelector(selectInstructors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return <GalleryElement elements={instructors} />;
};
