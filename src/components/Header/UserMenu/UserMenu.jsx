import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/operations";
import { selectIsInstructor } from "../../../redux/instructors/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isInstructor = useSelector(selectIsInstructor);

  console.log("isLoggedIn", isLoggedIn);
  console.log("isInstructor", isInstructor);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {/* Add a condition to check if the user is an instructor */}
      {!isLoggedIn ? (
        <>
          <NavLink to="/zarejestruj">Zarejestruj</NavLink>
          <NavLink to="/zaloguj">Zaloguj</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/czyInstruktor">Stwórz profil instruktora</NavLink>
          <NavLink onClick={handleLogout}>Wyloguj</NavLink>
        </>
      )}
    </>
  );
};
