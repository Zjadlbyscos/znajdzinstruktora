import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

import { HamburgerMenu } from "./Hamburger/Hamburger";
import { LogoHeader } from "../RenderSvg/RenderSvg";
import { Nav } from "../Nav/Nav";

import { HeaderContainer, StyleLogo, NavStyle, HamburgerStyle } from "./Header.styled";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="header">
      <HeaderContainer>
        <NavLink to="/main">
          <StyleLogo>
            <LogoHeader />
          </StyleLogo>
        </NavLink>
<NavStyle>
<Nav />
</NavStyle>
      
<HamburgerStyle>
<Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
</HamburgerStyle>
    
        <HamburgerMenu
          openState={isOpen}
          handleCloseMenu={() => setOpen(false)}
        />
      </HeaderContainer>
    </section>
  );
};
