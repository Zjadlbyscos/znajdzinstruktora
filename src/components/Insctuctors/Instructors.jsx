import { useDispatch } from "react-redux";
import { fetchInstructors } from "../../redux/instructors/operations";

export const Instructors = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchInstructors());
  };
  return (
    <>
      {" "}
      <p>Instructors Component</p>
      <button onClick={handleClick}>Kliknij</button>{" "}
    </>
  );
};
