const elementNav = document.querySelector('.header');
const elementToggle = document.querySelector('.header__toggle');

elementToggle.addEventListener('click', function() {
    if (elementNav.classList.contains('header--closed')) {
    elementNav.classList.remove('header--closed');
    elementNav.classList.add('header--opened');
  } else {
    elementNav.classList.add('header--closed');
    elementNav.classList.remove('header--opened');
  }
});
