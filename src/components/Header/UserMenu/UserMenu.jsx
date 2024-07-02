import React from "react";
import { NavLink } from "react-router-dom";

export const UserMenu = () => {
  return (
    <>
      <NavLink to="/czyInstruktor">Zarejestruj</NavLink>
      <NavLink to="/zaloguj">Zaloguj</NavLink>
    </>
  );
};
//lub Edytuj/Wyloguj 