import { useDispatch, useSelector } from "react-redux";
import { selectFacilities } from "../../redux/facilities/selectors";
import { fetchFacilities } from "../../redux/facilities/operations";
import { useEffect } from "react";
import { GalleryElement } from "../GalleryElement/GalleryElement";

export const Facilities = () => {
  const facilities = useSelector(selectFacilities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFacilities());
  }, [dispatch]);

  return <GalleryElement elements={facilities} />;
};
