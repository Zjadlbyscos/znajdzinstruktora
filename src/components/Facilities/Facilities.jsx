import { useDispatch, useSelector } from "react-redux";
import { selectFacilities } from "../../redux/facilities/selectors";
import { fetchFacilities } from "../../redux/facilities/operations";
import { useEffect, useState } from "react";
import { GalleryElement } from "../GalleryElement/GalleryElement";
import { Input } from "../search/Input";

export const Facilities = () => {
  const facilities = useSelector(selectFacilities);
  const dispatch = useDispatch();
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);

  useEffect(() => {
    dispatch(fetchFacilities());
  }, [dispatch]);

  useEffect(() => {
    setFilteredFacilities(facilities);
  }, [facilities]);

  const filterFacilities = (searchTerm) => {
    const filtered = facilities.filter(
      (facility) =>
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFacilities(filtered);
  };
  return (
    <div>
      <Input onChangeCallback={filterFacilities} />
      <GalleryElement elements={filteredFacilities} />
    </div>
  );
};
