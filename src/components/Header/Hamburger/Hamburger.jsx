import React from "react";
import { stack as Menu } from 'react-burger-menu'
import { CgClose } from "react-icons/cg";
import { HamburgerContainer } from "./Hamburger.styled";

export const HamburgerMenu = ({ openState, handleCloseMenu }) => {

      
    return (
      <Menu
        right
        bodyClassName={"modal-show"}
        width={"80%"}
        itemListElement="div"
        customBurgerIcon={false}
        isOpen={openState}
      >
        <HamburgerContainer>
        <CgClose onClick={handleCloseMenu} />
     
  <p>hamburger content</p>
  <a>Instruktorzy  </a>
  <a> Obiekty </a>
  <a>Zaloguj</a>
  <a>Zarejestruj</a>

        </HamburgerContainer>
      </Menu>
    );
  };