import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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
          <NavLink onClick={handleLogout}>Wyloguj</NavLink>
        </>
      )}
    </>
  );
};
