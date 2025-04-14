import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const initSliderJuri = () => {
  const sliderElement = document.querySelector('.hero__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.hero__swiper',{
    modules: [Pagination],

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

    /*navigation: {
      //nextEl: '.juri__button-next',
      //prevEl: '.juri__button-prev',
   // },

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
        spaceBetween: 40,
        simulateTouch: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        simulateTouch: false,
      }
    }*/
    pagination: {
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
    }
  });
};

initSliderJuri();
