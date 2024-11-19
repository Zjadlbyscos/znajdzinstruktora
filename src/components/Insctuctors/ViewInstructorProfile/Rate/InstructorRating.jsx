import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorRating } from "../../../../redux/rate/operations";
import { useEffect, useState } from "react";
import { selectRating } from "../../../../redux/rate/selectors";
import { useParams } from "react-router-dom";
import {
  RatingContainer,
  StyledCard,
  StyledComment,
  StyledElement,
} from "./InstructorRating.styled";
import { CommentModal } from "./Modals/CommentModal";

export const InstructorRating = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const rating = useSelector(selectRating);
  const maxLength = 150;

  const [selectedComment, setSelectedComment] = useState(null);

  useEffect(() => {
    dispatch(fetchInstructorRating(id));
  }, [dispatch, id]);

  const openCommentModal = (comment) => {
    setSelectedComment(comment);
  };

  const closeCommentModal = () => {
    setSelectedComment(null);
  };

  return (
    <>
      <h1>Opinie</h1>
      <RatingContainer>
        {rating.map((rate) => {
          const isTruncated = rate.comment.length > maxLength;
          const truncatedComment = isTruncated
            ? `${rate.comment.slice(0, maxLength)}...`
            : rate.comment;

          return (
            <StyledElement key={rate._id}>
              <StyledCard>
                <StyledComment>Ocena: {rate.rating}</StyledComment>
                <p>Wystawiona Przez: {rate.userFullName}</p>
                <p>{truncatedComment}</p>
                {isTruncated && (
                  <button onClick={() => openCommentModal(rate.comment)}>
                    Pokaż więcej
                  </button>
                )}
              </StyledCard>
            </StyledElement>
          );
        })}
      </RatingContainer>
      {selectedComment && (
        <CommentModal
          handleClose={closeCommentModal}
          comment={selectedComment}
        />
      )}
    </>
  );
};
