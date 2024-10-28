import styled from "styled-components";

export const PageContainer = styled.div`
  margin-right: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  .slick-list {
    margin: 0 auto;
    padding: 0 10px;
  }
  .slick-track {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .slick-prev,
  .slick-next {
    top: 100%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    background-color: var(--button-primary);
    @media (min-width: 680px) {
      width: 35px;
      height: 35px;
    }
    @media (min-width: 1024px) {
      width: 40px;
      height: 40px;
    }

    .--fc-more-link-text-color {
      color: white;
    }
  }
  .slick-prev {
    left: calc(10% - 10px);
  }
  .slick-next {
    right: calc(10% - 10px);
  }
  @media (min-width: 680px) {
    .slick-prev {
      left: calc(10% - 15px);
    }
    .slick-next {
      right: calc(10% - 40px);
    }
  }
  @media (min-width: 1024px) {
    .slick-prev {
      left: calc(5% - 35px);
    }
    .slick-next {
      right: calc(5% - 70px);
    }
  }
  .slick-arrow {
    margin: 30px 0;
  }
  .slick-prev.slick-disabled::before,
  .slick-next.slick-disabled::before {
    opacity: 1;
  }
  .slick-next::before,
  .slick-prev::before {
    @media (min-width: 1024px) {
      font-size: 25px;
    }
  }
`;

export const SearchImg = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  @media (min-width: 1024px) {
    height: 360px;
  }
`;

export const StyledElement = styled.div`
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
