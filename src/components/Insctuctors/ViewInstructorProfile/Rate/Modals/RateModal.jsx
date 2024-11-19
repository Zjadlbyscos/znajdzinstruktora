import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../../../hooks/useOutsideClick";
import {
  CommentInput,
  InstructorName,
  RateModalContainer,
  RateModalForm,
} from "./RateModal.styled";
import { Stars } from "../ReactStars";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/auth/selectors";
import { rateInstructor } from "../../../../../redux/rate/operations";
import {
  CloseButton,
  InfoInput,
} from "../../../../EditInstructorProfile/Calendar/Modals/DateModal.styled";

export const RateModal = ({ handleClose, instructor }) => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const modalRef = useRef();
  const user = useSelector(selectUser);
  const instructorId = instructor._id;
  const userId = user.id;

  useOutsideClick(modalRef, handleClose, true);
  useEffect(() => {
    if (instructor) {
      setValue("instructorId", instructorId || "");
      setValue("userId", userId || "");
      setValue("rating", rating || "");
      setValue("comment", comment || "");
    }
  }, [instructorId, userId, rating, comment, setValue, instructor]);

  const onSubmit = (data) => {
    const payload = {
      rating,
      comment: data.comment,
      instructorId,
      userId,
    };
    console.log(payload);
    dispatch(rateInstructor(payload));
    handleClose();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <RateModalContainer>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <RateModalForm onSubmit={handleSubmit(onSubmit)} ref={modalRef}>
        <InstructorName>
          Oceń instruktora <p>{instructor.fullName}</p>
        </InstructorName>
        <CommentInput
          type="text"
          placeholder="Wpisz komentarz..."
          onChange={handleInputChange}
          {...register("comment")}
        />
        <Stars rating={rating} onRatingChange={setRating} />
        <button type="submit">Oceń</button>
      </RateModalForm>
    </RateModalContainer>
  );
};
