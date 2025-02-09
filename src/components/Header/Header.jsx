import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { FaRegUser } from "react-icons/fa";

import { HamburgerMenu } from "./Hamburger/Hamburger";
import { LogoHeader } from "../RenderSvg/RenderSvg";
import { Nav } from "../Nav/Nav";
import { UserModal } from "./UserModal/UserModal";

import {
  HeaderContainer,
  StyleLogo,
  NavStyle,
  HamburgerStyle,
  UserInfo,
} from "./Header.styled";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);

  const toggle = (setState) => () => setState((prev) => !prev);

  return (
    <section className="header">
      <HeaderContainer>
        <NavLink to="/">
          <StyleLogo>
            <LogoHeader />
          </StyleLogo>
        </NavLink>
        <NavStyle>
          <Nav />
        </NavStyle>

        <UserInfo onClick={toggle(setUserModalOpen)}>
          <FaRegUser />
        </UserInfo>
        {isUserModalOpen && <UserModal closeModal={toggle(setUserModalOpen)} />}

        <HamburgerStyle>
          <Hamburger
            toggled={isOpen}
            toggle={toggle(setOpen)}
            direction="right"
            label="Show menu"
            color={isOpen ? "black" : "white"}
            rounded
          />
        </HamburgerStyle>

        {isOpen && <HamburgerMenu handleCloseMenu={toggle(setOpen)} />}
      </HeaderContainer>
    </section>
  );
};
