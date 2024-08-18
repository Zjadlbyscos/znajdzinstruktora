import styled from "styled-components";
import tlo_komputer from "../../images/main.bg/tlo_komputer.png";
import tlo_telefon from "../../images/main.bg/tlo_telefon.png";

export const Background = styled.div`
  background: linear-gradient(
    90deg,
    rgba(97, 46, 125, 1) 31%,
    rgba(50, 17, 86, 1) 74%
  );
  min-height: 80vh;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 80vh;

  @media screen and (min-width: 768px) {
   
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Content=styled.div`

 color   :white ;
 font-size: 23px;
 font-weight: 600;
 
`
export const Image=styled.div`
   margin-top: -30px;
     background-image: url(${tlo_telefon});
     background-repeat: no-repeat; 
     width:100%;
  height: 90%;
  background-size: contain;
  @media screen and (min-width: 768px) {
    margin-top: -50px;
    width:50%;
    background-image: url(${tlo_komputer});
    background-size: contain;
    background-position: center top;
  }
`