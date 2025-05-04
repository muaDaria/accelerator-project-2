import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initSliderReviews = () => {
  const sliderElement = document.querySelector('.reviews__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.reviews__swiper',{
    modules: [Navigation],

    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    simulateTouch: true,
    allowTouchMove: true,
    watchOverflow: true,

    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesOffsetAfter: 0,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        slidesOffsetAfter: 0,
      }
    }
  });
};

initSliderReviews();
