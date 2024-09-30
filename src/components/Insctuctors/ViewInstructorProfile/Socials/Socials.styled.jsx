import styled from "styled-components";

export const IconLink = styled.a`
  display: inline-block;
  width: 23px;
  height: 23px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
