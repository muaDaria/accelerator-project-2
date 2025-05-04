import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const initSliderAdvantages = () => {
  const sliderElement = document.querySelector('.advantages__swiper');
  if (!sliderElement) {
    return;
  }

  let advantagesSwiper = null;

  const duplicateSlides = () => {
    const sliderWrapper = sliderElement.querySelector('.advantages__slider');
    if (!sliderWrapper) {
      return;
    }

    const slides = sliderWrapper.querySelectorAll('.advantages__slide');
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      sliderWrapper.appendChild(clone);
    });
  };

  const removeDuplicateSlides = () => {
    const sliderWrapper = sliderElement.querySelector('.advantages__slider');
    if (!sliderWrapper) {
      return;
    }

    const slides = sliderWrapper.querySelectorAll('.advantages__slide');
    const originalCount = slides.length / 2;
    for (let i = originalCount; i < slides.length; i++) {
      slides[i].remove();
    }
  };

  const initSwiper = () => {
    if (window.innerWidth >= 1440 && !advantagesSwiper) {
      duplicateSlides();

      advantagesSwiper = new Swiper('.advantages__swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        initialSlide: 2,
        spaceBetween: 30,
        centeredSlides: true,
        slideToClickedSlide: true,
        watchOverflow: true,
        simulateTouch: true,
        allowTouchMove: true,

        navigation: {
          nextEl: '.advantages__button-next',
          prevEl: '.advantages__button-prev',
        },

      });
    } else if (window.innerWidth < 1440 && advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      removeDuplicateSlides();
      advantagesSwiper = null;
    }
  };

  initSwiper();
  window.addEventListener('resize', initSwiper);
};

initSliderAdvantages();
