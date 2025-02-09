import styled from "styled-components";
import tlo_komputer from "../../images/main.bg/tlo-komputer.png";
import tlo_telefon from "../../images/main.bg/tlo-telefon.png";
import tlo_big from "../../images/main.bg/tlo_big.png";

export const Background = styled.div`
  background: linear-gradient(
    90deg,
    rgba(97, 46, 125, 1) 31%,
    rgba(50, 17, 86, 1) 74%
  );
  height: 100%;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 620px;

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
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    z-index: 1;
    margin-top: 560px;
  }
`;
export const Image = styled.div`
  position: absolute;
  top: 0px;
  background-image: url(${tlo_telefon});
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 640px;
  background-size: contain;
  @media screen and (min-width: 768px) {
    width: 50%;
    background-image: url(${tlo_komputer});
    max-width: 600px;
    height: 850px;
    right: 0px;
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

export const DroppingText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const StaticText = styled.span`
  white-space: nowrap;
  margin-right: 10px;
`;

export const DynamicWordsContainer = styled.span`
  display: inline-block;
  height: 36px;
  position: relative;
  white-space: nowrap;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateY(100%);
    animation: changeWords 9s infinite ease-in-out;
    color: var(--button-primary);
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 3s;
  }
  div:nth-child(3) {
    animation-delay: 6s;
  }

  @keyframes changeWords {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    20% {
      opacity: 1;
      transform: translateY(0);
    }
    40% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`;
