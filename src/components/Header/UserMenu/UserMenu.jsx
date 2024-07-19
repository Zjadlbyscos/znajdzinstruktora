import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/operations";
import { selectIsInstructor } from "../../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isInstructor = useSelector(selectIsInstructor);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      {!isLoggedIn ? (
        <>
          <NavLink to="/zarejestruj">Zarejestruj</NavLink>
          <NavLink to="/zaloguj">Zaloguj</NavLink>
        </>
      ) : (
        <>
          {!isInstructor ? (
            <>
              <NavLink to="/czyInstruktor">Stwórz profil instruktora</NavLink>
              <NavLink onClick={handleLogout}>Wyloguj</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/edit-profile">Edytuj profil</NavLink>
              <NavLink onClick={handleLogout}>Wyloguj</NavLink>
            </>
          )}
        </>
      )}
    </>
  );
};
