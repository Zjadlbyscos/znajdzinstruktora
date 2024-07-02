import styled from "styled-components";
export const ProfieleModalContainer = styled.div`
 &{
  position: absolute;
  top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-2);
  width: 230px;
  gap: 25px;
  padding: 23px 5px;
  border-radius: 25px;}

  a {
    position: relative;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: var(--primary-color);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
