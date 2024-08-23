import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Content, Option } from "./AreYouInstructor.styled";
import { createInstructorProfile } from "../../redux/instructors/operations";
import { selectUser } from "../../redux/auth/selectors";

export const AreYouInstructor = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateProfile = async () => {
    try {
      const result = await dispatch(createInstructorProfile(user.id)).unwrap();
      if (result) {
        navigate(`/edit-profile`);
      }
    } catch (error) {
      console.error("Failed to create instructor profile:", error);
    }
  };

  return (
    <Wrapper>
      <Content>
        <h2>Prowadzisz zajęcia?</h2>

        <Option>
          <h3>Tak</h3>
          <p>Kliknij "Stwórz" aby utworzyć profil instruktora.</p>
          <Link to="/edit-profile">
          <button onClick={handleCreateProfile}>STWÓRZ</button>
          </Link>
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
