import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { PiUserFill } from "react-icons/pi";

import { HamburgerMenu } from "./Hamburger/Hamburger";
import { LogoHeader } from "../RenderSvg/RenderSvg";
import { Nav } from "../Nav/Nav";
import { UserModal } from "./UserModal/UserModal";

import { HeaderContainer, StyleLogo, NavStyle, HamburgerStyle,UserInfo } from "./Header.styled";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);

  const toggleUserModal = () => {
    setUserModalOpen(!isUserModalOpen);
  };

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


<UserInfo onClick={toggleUserModal}>
<PiUserFill />

</UserInfo >
{isUserModalOpen && <UserModal closeModal={toggleUserModal} />}

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
