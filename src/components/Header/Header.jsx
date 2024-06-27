import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import { HamburgerMenu } from "./Hamburger/Hamburger";
import { LogoHeader } from "../RenderSvg/RenderSvg";

import { HeaderContainer, StyleLogo } from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <HeaderContainer>
        <NavLink to="/">
          <StyleLogo>
            <LogoHeader />
          </StyleLogo>
        </NavLink>



        {/* <GiHamburgerMenu onClick={toggleBurgerMenu} /> */}
        <HamburgerMenu
          openState={isMenuOpen}
          handleCloseMenu={toggleBurgerMenu}
        />
      </HeaderContainer>
    </section>
  );
};
