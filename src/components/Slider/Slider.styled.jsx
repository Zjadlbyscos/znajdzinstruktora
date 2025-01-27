import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled(Slider)`
  .slick-list {
  }
  .slick-track {
  }
  .slick-slide {
    padding: 0 10px;
  }
  .slick-prev,
  .slick-next {
    top: 100%;
    transform: translateY(-50%);
    &:hover {
      color: black;
    }

    @media (min-width: 680px) {
      width: 35px;
      height: 35px;
    }
    @media (min-width: 1024px) {
      width: 40px;
      height: 40px;
    }

    .--fc-more-link-text-color {
    }
  }
  .slick-prev {
    left: calc(10% - 20px);
  }
  .slick-next {
    right: calc(10% - 5px);
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
      right: calc(5% - 35px);
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
    font-size: 32px;
    color: var(--button-primary);
  }
`;
