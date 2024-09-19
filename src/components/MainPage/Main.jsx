import {
  Background,
  Wrapper,
  Content,
  Image,
  SearchContainer,
} from "./Main.styled";
import SearchForm from "./SearchForm/SearchForm";

export const Main = () => {
  return (
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
  );
};
