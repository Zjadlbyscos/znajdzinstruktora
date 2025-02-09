import styled from "styled-components";

export const GalleryElementUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const StyledElement = styled.li`
  cursor: pointer;
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
  @media screen and (min-width: 768px) {
  }
  p {
    font-size: 14px;
    font-weight: 600;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const StyledBio = styled.p`
  color: var(--text-color-white);
  padding: 20px 36px;
  position: absolute;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    padding: 20px 36px;
    font-size: 18px;
  }
`;
