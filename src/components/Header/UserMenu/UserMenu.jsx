import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <NavLink to="/czyInstruktor">Zarejestruj</NavLink>
          <NavLink to="/zaloguj">Zaloguj</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/edytuj-profil">Edytuj profil</NavLink>
          <NavLink to="/wyloguj">Wyloguj</NavLink>
        </>
      )}
    </>
  );
};
// lub edytuj profil / wyloguj - jeśli zalogowany
