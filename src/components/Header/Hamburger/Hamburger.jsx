import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { CgClose } from "react-icons/cg";

import { HamburgerContainer } from "./Hamburger.styled";

export const HamburgerMenu = ({ openState, handleCloseMenu }) => {
  return (
    <Menu
      right
      bodyClassName={"modal-show"}
      itemListElement="div"
      customBurgerIcon={false} 
      isOpen={openState}
      onStateChange={({ isOpen }) => !isOpen && handleCloseMenu()}
    >
      <HamburgerContainer>
        <CgClose onClick={handleCloseMenu} />
        <p> NAV content </p>
      </HamburgerContainer>
    </Menu>
  );
};
