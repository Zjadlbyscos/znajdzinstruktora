import React, { useEffect, useState } from "react";
import {
  Comment,
  CommentContainer,
  CommentModalWrapper,
  CommentRating,
} from "./CommentModal.styled";
import { RatingStar } from "../ReactStars";

export const CommentModal = ({ handleClose, rate, date }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);
  const formattedDate = new Date(rate.createdAt).toLocaleDateString();
  return (
    <CommentModalWrapper className={isVisible ? "visible" : "hidden"}>
      <button onClick={handleClose}>X</button>
      <CommentContainer>
        <CommentRating>
          <p>{rate.rating}</p>
          <RatingStar />
        </CommentRating>
        <p>{rate.userFullName}</p>
        <p>{formattedDate}</p>
        <Comment>{rate.comment}</Comment>
      </CommentContainer>
    </CommentModalWrapper>
  );
};
