import React, { useRef } from "react";

import { Nav } from "../../Nav/Nav";
import { UserMenu } from "../UserMenu/UserMenu";
import { LogoText } from "../../RenderSvg/RenderSvg";
import useOutsideClick from "../../../hooks/useOutsideClick";

import { HamburgerContainer, LogoDown } from "./Hamburger.styled";

export const HamburgerMenu = ({ openState, handleCloseMenu 


}) => {
  const menuRef = useRef();
  useOutsideClick(menuRef, handleCloseMenu, openState);
  const handleClick = (event) => {
    handleCloseMenu();
  };
  return (

      <HamburgerContainer ref={menuRef} onClick={handleClick}>
        <Nav handleCloseMenu={handleCloseMenu} />
        <div className="line" />
        <div>
          <UserMenu handleCloseMenu={handleCloseMenu} />
        </div>
        <LogoDown>
          <LogoText />
        </LogoDown>
      </HamburgerContainer>

  );
};
