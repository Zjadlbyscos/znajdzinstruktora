import styled from "styled-components";
import tlo_komputer from "../../images/main.bg/tlo-komputer.png";
import tlo_telefon from "../../images/main.bg/tlo-telefon.png";
import tlo_big from "../../images/main.bg/tlo_big.png"

export const Background = styled.div`
  background: linear-gradient(
    90deg,
    rgba(97, 46, 125, 1) 31%,
    rgba(50, 17, 86, 1) 74%
  );
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 660px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 725px;
  }
  @media screen and (min-width: 1024px) {
    height: 760px;
  }
  @media screen and (min-width: 1440px) {
    height: 900px;
  }
`;

export const Content = styled.div`
padding: 20px 0px;
  color: white;
  font-size: 23px;
  font-weight: 600;
`;
export const Image = styled.div`
position: absolute;
top:0px;
  /* margin-top: -30px; */
  background-image: url(${tlo_telefon});
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 640px;
  background-size: contain;
  @media screen and (min-width: 768px) {
    width: 50%;
    background-image: url(${tlo_komputer});
  max-width:600px;
    height: 850px;
    right:0px;
    background-position: center center;
  }
  @media screen and (min-width: 1024px) {
    background-image: url(${tlo_big});
    max-width: 800px;
height: 900px;
background-position: center center;
  }
  @media screen and (min-width: 1440px) {
    max-width: 800px;
height: 1050px;
  }
`;
