import { Background, Wrapper, Content, Image } from "./Main.styled";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchElement } from "./SearchElement/SearchElement";
import { useState } from "react";

export const Main = () => {
  const [searchParams, setSearchParams] = useState({});
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleSearch = (params) => {
    setSearchParams(params);
  };
  return (
    <>
      <Background>
        <section>
          <Wrapper>
            <Content>
              <p>ZNAJDŹ ZAJĘCIA DLA SIEBIE</p>
              <SearchForm
                onSearch={handleSearch}
                onFormFilled={setIsFormFilled}
              />
            </Content>
            <Image></Image>
          </Wrapper>
        </section>
      </Background>
      <SearchElement searchParams={searchParams} isFormFilled={isFormFilled} />
    </>
  );
};
