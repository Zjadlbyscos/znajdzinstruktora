import styled from "styled-components";

export const HeaderContainer = styled.div`

position: relative;
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`
export const StyleLogo = styled.div`

  svg {
    width: 50px;
  }
`;

export const NavStyle= styled.div`
    display: none;
    @media (min-width: 768px) {
    display: flex;
   & div{
    flex-direction: row;
    gap:25px;

   } 
   & a{
    color:var(  --text-color-3)
   }
}

`
export const HamburgerStyle=styled.div`
position: absolute;
right: 21px;
z-index: 2000;
@media (min-width: 768px) {
    display: none;
}
`

export const UserInfo =styled.div`
  cursor: pointer;
`