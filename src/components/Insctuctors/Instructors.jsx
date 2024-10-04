import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../../redux/instructors/operations";
import {
  selectInstructors,
  selectTotalPages,
} from "../../redux/instructors/selectors";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { useEffect, useState } from "react";
import { InstructorsWrapper } from "./Instructors.styled";

export const Instructors = () => {
  const instructors = useSelector(selectInstructors);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const resetInstructors = () => {
    setCurrentPage(1);
    dispatch({ type: "instructors/reset" });
  };

  useEffect(() => {
    resetInstructors();
    dispatch(fetchInstructors(1));
  }, [dispatch]);

  const fetchMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      dispatch(fetchInstructors(currentPage + 1));
    } else {
      setHasMore(false);
    }
  };

  return (
    <InstructorsWrapper>
      <GalleryElement
        elements={instructors}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </InstructorsWrapper>
  );
};
