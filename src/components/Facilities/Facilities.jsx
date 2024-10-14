import { useDispatch, useSelector } from "react-redux";
import {
  selectFacilities,
  selectFacilitiesTotalPages,
} from "../../redux/facilities/selectors";
import { fetchFacilities } from "../../redux/facilities/operations";
import { useEffect, useState } from "react";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { FacilitiesWrapper } from "./Facilities.styled";

export const Facilities = () => {
  const dispatch = useDispatch();
  const facilities = useSelector(selectFacilities);
  const totalPages = useSelector(selectFacilitiesTotalPages);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const resetFacilities = () => {
    setCurrentPage(1);
    dispatch({ type: "facilities/reset" });
  };

  useEffect(() => {
    resetFacilities();
    dispatch(fetchFacilities(1));
  }, [dispatch]);

  const fetchMoreData = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      dispatch(fetchFacilities(currentPage + 1));
    } else {
      setHasMore(false);
    }
  };

  return (
    <FacilitiesWrapper>
      <GalleryElement
        elements={facilities}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
    </FacilitiesWrapper>
  );
};
