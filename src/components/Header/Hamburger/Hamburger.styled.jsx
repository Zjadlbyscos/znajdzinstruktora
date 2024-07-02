import styled from "styled-components";

export const HamburgerContainer = styled.div`
  background-color: var(--background-2);
  border-radius: 8px;
  min-height: 100%;
  padding: 75px 26px;
  & div {
    padding: 12px 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 25px;
  }
  & a {
    color: var(--text-color-1);
    font-weight: 600;
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

  a:hover::before,
  a:focus::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
