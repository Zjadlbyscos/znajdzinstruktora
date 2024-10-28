import ReactStars from "react-rating-stars-component";
import React from "react";
import { StarsContainer } from "./RateModal.styled";

export const Stars = ({ rating, onRatingChange }) => {
  const handleChange = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <StarsContainer>
      <ReactStars
        value={rating}
        size={24}
        color2={"#ffd700"}
        onChange={handleChange}
      />
    </StarsContainer>
  );
};
