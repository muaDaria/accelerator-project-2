import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
//import 'swiper/css';

const initSliderJuri = () => {
  const sliderElement = document.querySelector('.tours__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.tours__swiper',{
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,
    grabCursor: 'pointer',
    slidesPerView: 1,
    initialSlide: 0,
    simulateTouch: true,
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    //watchOverflow: true,
    //centeredSides: false,

    navigation: {
      nextEl: '.tours__button-next',
      prevEl: '.tours__button-prev',
    },

    //mousewheel: {
    // forceToAxis: true,
    // releaseOnEdges: true,
    //},

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false,
      }
    }
    /*pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} hero__pagination-bullet" tabindex="0"></button>`;
      },
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      horizontalClass: 'hero__pagination-horizontal',
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    }*/
  });
};

initSliderJuri();
