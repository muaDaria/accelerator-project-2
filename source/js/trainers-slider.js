import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initSliderTrainers = () => {
  const sliderElement = document.querySelector('.trainers__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.trainers__swiper',{
    modules: [Navigation],

    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    simulateTouch: true,
    allowTouchMove: true,

    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
        simulateTouch: true,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        initialSlide: 0,
        spaceBetween: 20,
        simulateTouch: true,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        simulateTouch: false,
        allowTouchMove: false,
      }
    }
  });
};

initSliderTrainers();
