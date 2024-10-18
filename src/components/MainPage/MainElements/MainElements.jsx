import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectSearchResults,
} from "../../../redux/search/selectors";
import { useEffect } from "react";
import { searchEvents } from "../../../redux/search/operations";
import {
  PageContainer,
  SearchElementWrapper,
  SearchImg,
  StyledBio,
  StyledCaption,
  StyledCard,
  StyledElement,
} from "./MainElements.styled";
import NoImageSmall from "../../../images/NoImageSmall.png";
import { sliderSettings } from "../../../hooks/sliderSettings";

export const MainElements = ({
  searchParams,
  isFormFilled,
  elements,
  city,
}) => {
  const dispatch = useDispatch();
  const instructors = useSelector(selectSearchResults);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (searchParams) {
      dispatch(searchEvents({ searchData: searchParams }));
    }
  }, [dispatch, searchParams]);

  const renderSection = (title, items) => {
    if (items && items.length > 0) {
      return (
        <PageContainer>
          <h2>{title}</h2>

          <SearchElementWrapper>
            <Slider {...sliderSettings}>
              {items.map((el) => (
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
      );
    } else {
      return <p>Brak wyników</p>;
    }
  };
  return (
    <>
      {loading && <p>Ładowanie...</p>}
      {isFormFilled && renderSection("Wyniki wyszukiwania", instructors)}
      {city && renderSection(`Instruktorzy w ${city}`, elements)}
    </>
  );
};
