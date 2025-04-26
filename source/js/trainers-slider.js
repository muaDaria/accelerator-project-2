import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
//import 'swiper/css';

const initSliderTrainers = () => {
  const sliderElement = document.querySelector('.trainers__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.trainers__swiper',{
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,
    grabCursor: 'pointer',
    slidesPerView: 1,
    //autoHeight: true,
    //initialSlide: 0,
    simulateTouch: true,
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    //watchOverflow: true,
    //centeredSides: false,

    navigation: {
      nextEl: '.trainers__button-next',
      prevEl: '.trainers__button-prev',
    },

    //mousewheel: {
    // forceToAxis: true,
    // releaseOnEdges: true,
    //},

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        simulateTouch: false,
      }
    }
    /*

    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    }*/
  });
};

initSliderTrainers();
