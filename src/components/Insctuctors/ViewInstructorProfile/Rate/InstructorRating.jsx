import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorRating } from "../../../../redux/rate/operations";
import { useEffect } from "react";
import { selectRating } from "../../../../redux/rate/selectors";
import { useParams } from "react-router-dom";

export const InstructorRating = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(fetchInstructorRating(id));
  }, [dispatch, id]);
  const rating = useSelector(selectRating);

  console.log(rating, "rating");

  return (
    <div>
      <h1>Opinie</h1>
      {rating.map((rate) => (
        <div key={rate._id}>
          <p>{rate.rating}</p>
          <p>{rate.userFullName}</p>
          <p>{rate.comment}</p>
        </div>
      ))}
    </div>
  );
};
