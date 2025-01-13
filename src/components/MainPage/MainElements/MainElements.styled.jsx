import styled from "styled-components";

export const PageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  h2 {
    @media (min-width: 768px) {
      margin-left: 30px;
    }
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SearchElementWrapper = styled.div`
  margin-bottom: 75px;
`;

export const SearchImg = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  @media (min-width: 1024px) {
    height: 360px;
  }
`;

export const StyledElement = styled.div`
  display: flex;
  gap: 20px;
  max-width: 300px;
  height: 300px;
  &:hover {
    transition: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledBio = styled.p`
  color: var(--text-color-white);
  padding: 20px 24px;
  position: absolute;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
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
  @media (min-width: 768px) {
  }
`;
