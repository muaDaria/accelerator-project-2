const elementNav = document.querySelector('.header');
const elementToggle = document.querySelector('.header__toggle');
const navItems = document.querySelectorAll('.header__nav-item');
const overlay = document.querySelector('.overlay');

const closeMenu = () => {
  elementNav.classList.add('header--closed');
  elementNav.classList.remove('header--opened');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
};

const toggleMenu = () => {
  if (elementNav.classList.contains('header--closed')) {
    elementNav.classList.remove('header--closed');
    elementNav.classList.add('header--opened');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    closeMenu();
  }
};

elementToggle.addEventListener('click', toggleMenu);

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});
