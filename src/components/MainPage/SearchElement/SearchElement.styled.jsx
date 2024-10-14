import styled from "styled-components";

export const SearchElementWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SearchImg = styled.img`
  display: block;
  width: 189px;
  max-width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 15px;
`;

export const StyledElement = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  &:hover {
    transition: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledCard = styled.div`
  position: relative;
  overflow: hidden;

  &:hover p {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(158, 107, 132, 0.7);
  color: white;
  text-align: center;
`;

export const StyledBio = styled.p`
  color: var(--text-color-white);
  padding: 20px 24px;
  position: absolute;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
`;
