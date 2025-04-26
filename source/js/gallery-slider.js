import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initSliderGallery = () => {
  const sliderElement = document.querySelector('.gallery__swiper');
  if (!sliderElement) {
    return;
  }

  let gallerySwiper = null;

  const initSwiper = () => {
    gallerySwiper = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      initialSlide: 0,
      simulateTouch: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          initialSlide: 0,
          simulateTouch: true,
        },
        768: {
          slidesPerView: 3,
          simulateTouch: false,
        },
      },
    });
  };

  const handleResize = () => {
    if (window.innerWidth >= 1440) {
      if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
        gallerySwiper = null;
      }
    } else {
      if (!gallerySwiper) {
        initSwiper();
      }
    }
  };

  handleResize();

  window.addEventListener('resize', handleResize);
};

initSliderGallery();
