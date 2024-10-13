import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../../redux/instructors/operations";
import {
  selectAllInstructors,
  selectTotalPages,
} from "../../redux/instructors/selectors";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { useEffect, useState } from "react";
import { InstructorsWrapper } from "./Instructors.styled";
import { Filter } from "./Filter/Filter";
import { reset } from "../../redux/instructors/instructorsSlice";

export const Instructors = () => {
  const instructors = useSelector(selectAllInstructors);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    city: "",
    discipline: "",
    languages: "",
  });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(reset());
    setHasMore(true);
    dispatch(fetchInstructors({ ...filters, page: 1, limit: 2 }));
  }, [filters, dispatch]);

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(fetchInstructors({ ...filters, page: currentPage, limit: 2 }));
    }
  }, [currentPage, filters, dispatch]);

  const fetchMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <Filter filters={filters} setFilters={setFilters} />
      <InstructorsWrapper>
        <GalleryElement
          elements={instructors}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
        />
      </InstructorsWrapper>
    </>
  );
};
