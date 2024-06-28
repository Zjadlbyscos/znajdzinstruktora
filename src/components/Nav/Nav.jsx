import React from "react";
import { NavLink } from "react-router-dom";
import { NavContainer } from "./Nav.styled";

export const Nav = ({ isMobile }) => {
  return (
    <NavContainer isMobile={isMobile}>
      <NavLink to="/link1">Instruktorzy</NavLink>
      <NavLink to="/link2">Obiekty</NavLink>

    </NavContainer>
  );
};