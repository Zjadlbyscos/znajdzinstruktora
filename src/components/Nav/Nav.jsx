import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./Nav.styled";

export const Nav = ({ isMobile }) => {
  return (
    <NavContainer>
      <NavLink to="/instruktorzy">Instruktorzy</NavLink>
      <NavLink to="/edit-profile">Obiekty</NavLink>
    </NavContainer>
  );
};
