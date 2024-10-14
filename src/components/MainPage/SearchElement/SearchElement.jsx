import { Link } from "react-router-dom";
import NoImageSmall from "../../../images/NoImageSmall.png";
import {
  SearchElementWrapper,
  SearchImg,
  StyledBio,
  StyledCaption,
  StyledCard,
  StyledElement,
} from "./SearchElement.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchEvents } from "../../../redux/search/operations";

import {
  selectIsLoading,
  selectSearchResults,
  selectSearchTotalPages,
} from "../../../redux/search/selectors";

export const SearchElement = ({ searchParams, isFormFilled }) => {
  const dispatch = useDispatch();
  const instructors = useSelector(selectSearchResults);
  const totalPages = useSelector(selectSearchTotalPages);
  const loading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchParams) {
      dispatch(searchEvents({ searchData: searchParams, page, limit: 4 }));
    }
  }, [dispatch, page, searchParams]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (!isFormFilled) return null;

  return (
    <>
      <h2>Twoje wyszukiwanie</h2>
      {loading && <p>Ładowanie...</p>}
      {instructors && instructors.length > 0 ? (
        <SearchElementWrapper>
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
        </SearchElementWrapper>
      ) : (
        <p>Brak wyników</p>
      )}
      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          {"<<"}
        </button>
        <button onClick={handleLoadMore} disabled={page >= totalPages}>
          {">>"}
        </button>
      </div>
    </>
  );
};
