import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled(Slider)`
  .slick-list {
  }
  .slick-track {
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
