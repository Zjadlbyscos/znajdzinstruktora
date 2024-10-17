import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoImageSmall from "../../../images/NoImageSmall.png";
import {
  SearchElementWrapper,
  SearchImg,
  StyledBio,
  StyledCaption,
  StyledCard,
  StyledElement,
  PageContainer,
} from "./SearchElement.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchEvents } from "../../../redux/search/operations";
import {
  selectIsLoading,
  selectSearchResults,
} from "../../../redux/search/selectors";
import { sliderSettings } from "../../../hooks/sliderSettings";

export const SearchElement = ({ searchParams, isFormFilled }) => {
  const dispatch = useDispatch();
  const instructors = useSelector(selectSearchResults);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (searchParams) {
      dispatch(searchEvents({ searchData: searchParams }));
    }
  }, [dispatch, searchParams]);

  if (!isFormFilled) return null;

  return (
    <>
      <h2>Twoje wyszukiwanie</h2>
      {loading && <p>Ładowanie...</p>}
      {instructors && instructors.length > 0 ? (
        <PageContainer>
          <SearchElementWrapper className="slider-container">
            <Slider {...sliderSettings}>
              {instructors.map((el) => (
                <StyledElement key={el._id}>
                  <Link to={`/instruktorzy/${el._id}`}>
                    <StyledCard>
                      <StyledBio>{el.bio}</StyledBio>
                      <SearchImg src={el.image || NoImageSmall} alt="Image" />
                      <StyledCaption>
                        <p>{el.fullName}</p>
                        <p>{el.discipline}</p>
                      </StyledCaption>
                    </StyledCard>
                  </Link>
                </StyledElement>
              ))}
            </Slider>
          </SearchElementWrapper>
        </PageContainer>
      ) : (
        <p>Brak wyników</p>
      )}
    </>
  );
};
