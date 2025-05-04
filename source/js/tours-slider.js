import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initSliderTours = () => {
  const sliderElement = document.querySelector('.tours__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.tours__swiper',{
    modules: [Navigation],

    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 0,
    simulateTouch: true,
    allowTouchMove: true,
    watchOverflow: true,

    navigation: {
      nextEl: '.tours__button-next',
      prevEl: '.tours__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
};

initSliderTours();
