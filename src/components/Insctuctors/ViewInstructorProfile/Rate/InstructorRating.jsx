import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorRating } from "../../../../redux/rate/operations";
import { useEffect, useState } from "react";
import { selectRating } from "../../../../redux/rate/selectors";
import { useParams } from "react-router-dom";
import {
  RateContainer,
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
import { RatingStar } from "./ReactStars";

export const InstructorRating = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const rating = useSelector(selectRating);
  const [maxLength, setMaxLength] = useState(0);
  console.log(maxLength);

  useEffect(() => {
    const handleLengthChange = () => {
      if (window.innerWidth < 600) {
        setMaxLength(200);
      } else {
        setMaxLength(160);
      }
    };
    window.addEventListener("resize", handleLengthChange);
    handleLengthChange();
    return () => window.removeEventListener("resize", handleLengthChange);
  }, []);

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
                  <RateContainer>
                    <StyledRating>{rate.rating}</StyledRating>
                    <RatingStar />
                  </RateContainer>
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
