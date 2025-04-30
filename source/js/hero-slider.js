import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const initSliderHero = () => {
  const sliderElement = document.querySelector('.hero__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.hero__swiper',{
    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    initialSlide: 0,
    simulateTouch: true,
    allowTouchMove: true,

    pagination: {
      el: '.hero__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} hero__pagination-bullet" type="button"></button>`;
      },
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      horizontalClass: 'hero__pagination-horizontal',
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
        slidesPerView: 1,
      }
    }
  });
};

initSliderHero();
