import {
  Background,
  Wrapper,
  Content,
  Image,
  Text,
  DroppingText,
  DynamicWord,
  StaticText,
  DynamicWordsContainer,
} from "./Main.styled";
import { SearchForm } from "./SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { MainElements } from "./MainElements/MainElements";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCity } from "../../redux/auth/selectors";
import { selectInstructorsByCity } from "../../redux/instructors/selectors";
import { fetchInstructorsByCity } from "../../redux/instructors/operations";

export const Main = () => {
  const [searchParams, setSearchParams] = useState({});
  const [isFormFilled, setIsFormFilled] = useState(false);

  const city = useSelector(selectUserCity);
  const instructors = useSelector(selectInstructorsByCity);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInstructorsByCity({ city }));
  }, [city, dispatch]);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <>
      <Background>
        <section>
          <Wrapper>
            <Content>
              <DroppingText>
                <StaticText>ZNAJDŹ DLA SIEBIE</StaticText>
                <DynamicWordsContainer>
                  <div>INSTRUKTORA</div>
                  <div>ZAJĘCIA</div>
                  <div>NOWE MOŻLIWOŚCI</div>
                </DynamicWordsContainer>
              </DroppingText>
              <SearchForm
                onSearch={handleSearch}
                onFormFilled={setIsFormFilled}
              />
            </Content>
            <Image></Image>
          </Wrapper>
        </section>
      </Background>
      <MainElements
        elements={instructors}
        city={city}
        isFormFilled={isFormFilled}
        searchParams={searchParams}
      />
    </>
  );
};
