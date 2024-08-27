import styled from "styled-components";

export const HeaderContainer = styled.div`
z-index: 30;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 36px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    gap: 70px;
  }
`;
export const StyleLogo = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 48px;
  }

  svg {
    width: 100%;
    max-width: 40px;
    padding-top: 5px;
    @media (min-width: 768px) {
      padding-top: 5px;
    }
  }
`;

export const NavStyle = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    & div {
      flex-direction: row;
      gap: 36px;
      @media (min-width: 1024px) {
        gap: 70px;
      }
    }

    & a {
      color: var(--text-color-3);
    }
  }
`;
export const HamburgerStyle = styled.div`
  position: absolute;
  right: 21px;
  z-index: 2000;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const UserInfo = styled.a`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    cursor: pointer;
    svg {
      color: var(--text-color-3);

      &:hover,
      &:focus {
        color: var(--primary-color);
      }
    }
  }
`;
