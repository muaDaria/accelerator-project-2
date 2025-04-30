import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
//import 'swiper/css';

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
    initialSlide: 0,
    simulateTouch: true,
    //effect: 'slide',
    watchOverflow: true,
    //resistanceRatio: 0,
    //centeredSides: false,

    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    //mousewheel: {
    // forceToAxis: true,
    // releaseOnEdges: true,
    //},

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        simulateTouch: false,
        slidesOffsetAfter: 0,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        simulateTouch: false,
        slidesOffsetAfter: 0,
      }
    }

    /*breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    }*/
  });
};

initSliderReviews();
