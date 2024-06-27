import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { CgClose } from "react-icons/cg";
import { HamburgerContainer } from "./Hamburger.styled";
import { GiHamburgerMenu } from "react-icons/gi";

export const HamburgerMenu = ({ openState, handleCloseMenu }) => {

      
    return (
      <Menu
        right
        bodyClassName={"modal-show"}
        // width={"80%"}
        // itemListElement="div"
        customBurgerIcon={<GiHamburgerMenu/>}
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