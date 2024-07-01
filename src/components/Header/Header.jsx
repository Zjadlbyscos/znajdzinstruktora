import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { FaRegUser } from "react-icons/fa";

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
       <NavLink to="/">
          <StyleLogo>
            <LogoHeader />
          </StyleLogo>
        </NavLink>
      <HeaderContainer>
       
<NavStyle>
<Nav />
</NavStyle>


<UserInfo onClick={toggleUserModal}>
<FaRegUser />

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
