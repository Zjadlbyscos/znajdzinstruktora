export const sliderSettings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  rows: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
        dots: false,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
