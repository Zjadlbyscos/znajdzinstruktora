import { useSelector } from "react-redux";
import { selectSearchResults } from "../../redux/search/selectors";
import { Background, Wrapper, Content, Image } from "./Main.styled";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchElement } from "./SearchElement/SearchElement";

export const Main = () => {
  const searchResults = useSelector(selectSearchResults);
  return (
    <>
      <Background>
        <section>
          <Wrapper>
            <Content>
              <SearchForm />

              <p>ZNAJDŹ ZAJĘCIA DLA SIEBIE</p>
            </Content>
            <Image></Image>
          </Wrapper>
        </section>
      </Background>
      <SearchElement elements={searchResults} />
    </>
  );
};
