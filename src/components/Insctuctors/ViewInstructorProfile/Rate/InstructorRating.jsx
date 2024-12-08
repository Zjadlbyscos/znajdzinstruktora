import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorRating } from "../../../../redux/rate/operations";
import { useEffect, useState } from "react";
import { selectRating } from "../../../../redux/rate/selectors";
import { useParams } from "react-router-dom";
import {
  RatingContainer,
  RatingWrapper,
  StyledCard,
  StyledComment,
  StyledElement,
  StyledRating,
  StyledUser,
} from "./InstructorRating.styled";
import { CommentModal } from "./Modals/CommentModal";
import { sliderSettings } from "../../../../hooks/sliderSettings";
import { StyledSlider } from "../../../Slider/Slider.styled";

export const InstructorRating = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const rating = useSelector(selectRating);
  const maxLength = 150;

  const [selectedRate, setSelectedRate] = useState(null);

  useEffect(() => {
    dispatch(fetchInstructorRating(id));
  }, [dispatch, id]);

  const openCommentModal = (rate) => {
    setSelectedRate(rate);
  };

  const closeCommentModal = () => {
    setSelectedRate(null);
  };

  return (
    <div>
      <RatingWrapper>
        <h1>Opinie</h1>
        <RatingContainer>
          <StyledSlider {...sliderSettings}>
            {rating.map((rate) => {
              const isTruncated = rate.comment.length > maxLength;
              const truncatedComment = isTruncated
                ? `${rate.comment.slice(0, maxLength)}...`
                : rate.comment;
              const formattedDate = new Date(
                rate.createdAt
              ).toLocaleDateString();
              return (
                <StyledElement key={rate._id}>
                  <StyledRating>{rate.rating}</StyledRating>
                  <StyledCard>
                    <StyledUser>{rate.userFullName}</StyledUser>
                    <p>{formattedDate}</p>
                    <StyledComment>{truncatedComment}</StyledComment>
                    {isTruncated && (
                      <button onClick={() => openCommentModal(rate)}>
                        Pokaż więcej
                      </button>
                    )}
                  </StyledCard>
                </StyledElement>
              );
            })}
          </StyledSlider>
        </RatingContainer>
        {selectedRate && (
          <CommentModal handleClose={closeCommentModal} rate={selectedRate} />
        )}
      </RatingWrapper>
    </div>
  );
};
