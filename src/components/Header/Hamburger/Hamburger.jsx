import React, { useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import { Nav } from "../../Nav/Nav";
import { HamburgerContainer } from "./Hamburger.styled";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { UserModal } from "../UserModal/UserModal";

export const HamburgerMenu = ({ openState, handleCloseMenu }) => {
  const menuRef = useRef();
  useOutsideClick(menuRef, handleCloseMenu, openState);

  return (
    <Menu
      right
      bodyClassName={"modal-show"}
      itemListElement="div"
      customBurgerIcon={false}
      isOpen={openState}
      onStateChange={({ isOpen }) => !isOpen && handleCloseMenu()}
    >
      <HamburgerContainer ref={menuRef}>
        <Nav />
        <div className="line" />
        <div>
          <NavLink to="/czyInstruktor">Zarejestruj</NavLink>
          <NavLink to="/zaloguj">Zaloguj</NavLink>
        </div>
      </HamburgerContainer>
    </Menu>
  );
};
