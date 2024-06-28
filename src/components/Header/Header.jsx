import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';

import { HamburgerMenu } from "./Hamburger/Hamburger";
import { LogoHeader } from "../RenderSvg/RenderSvg";

import { HeaderContainer, StyleLogo } from "./Header.styled";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="header">
      <HeaderContainer>
        <NavLink to="/main">
<StyleLogo><LogoHeader/></StyleLogo>
        </NavLink>
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
        <HamburgerMenu openState={isOpen} handleCloseMenu={() => setOpen(false)} />
      </HeaderContainer>
    </section>
  );
};
