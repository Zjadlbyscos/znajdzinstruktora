import styled from "styled-components";

export const HamburgerContainer = styled.div`
  background-color: var(  --background-2);
  border-radius: 8px;
   min-height: 100%;
   padding: 75px 26px;
& div{
padding: 12px 32px;
     display: flex;
   flex-direction: column;
  align-items: flex-end;
  gap:25px;
}
& a{
  color: var(--text-color-1);
}

    @media (min-width: 1024px) {
        display: none;
}

`