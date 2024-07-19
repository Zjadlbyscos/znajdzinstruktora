import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Wrapper, Content, Option } from "./AreYouInstructor.styled";
import { createInstructorProfile } from "../../redux/instructors/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export const AreYouInstructor = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = user.id;

  const handleCreateInstructorProfile = () => {
    dispatch(createInstructorProfile(id));
    navigate("/edit-profile");
  };
  return (
    <Wrapper>
      <Content>
        <h2>Prowadzisz zajęcia?</h2>

        <Option>
          <h3>Tak</h3>

          <p>Kliknij "Stwórz" aby utworzyć profil instruktora.</p>
          <button onClick={handleCreateInstructorProfile}>STWÓRZ</button>
        </Option>
        <Option>
          <h3>Nie</h3>
          <Link to="/">
            <button>WRÓĆ DO STRONY GŁÓWNEJ</button>
          </Link>
        </Option>
      </Content>
    </Wrapper>
  );
};
