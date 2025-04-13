import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const initSliderJuri = () => {
  const sliderElement = document.querySelector('.juri__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.juri__swiper', {
    modules: [Navigation, Pagination],

    direction: 'horizontal',
    loop: true,
    grabCursor: 'pointer',
    slidesPerView: 1,
    initialSlide: 0,
    //watchOverflow: true,
    //centeredSides: false,

    navigation: {
      nextEl: '.juri__button-next',
      prevEl: '.juri__button-prev',
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
        spaceBetween: 40,
        simulateTouch: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        simulateTouch: false,
      }
    }
  });
};

initSliderJuri();
