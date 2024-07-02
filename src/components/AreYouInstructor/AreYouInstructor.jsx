import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Option } from "./AreYouInstructor.styled";

export const AreYouInstructor = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Prowadzisz zajęcia? </h2>

        <Option>
          <h3>Tak</h3>

          <p>Kliknij "zarejestruj" aby utworzyć konto.</p>
          <Link to="/zarejestruj">
            <button>ZAREJESTRUJ</button>
          </Link>
        </Option>
        <Option>
          <h3>Nie</h3>
          <p>
            Nie potrzebujesz konta, żeby znaleść instruktora. Przejdź do
            wyszukiwania
          </p>
          <Link to='/'>
            <button>WRÓĆ DO STRONY GŁÓWNEJ</button>
          </Link>
        </Option>
      </Content>
    </Wrapper>
  );
};
