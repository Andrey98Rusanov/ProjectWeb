import '../scss/style.scss'
const buttonSeeMore = document.querySelector(".brands-button");
const cards = document.querySelector('.cards');
const buttonSeeMore__text = document.querySelector('.brands-button__text')
const buttonSeeMore__img = document.querySelector('.brands-button__img')

buttonSeeMore.addEventListener('click', function () {
    if (cards.classList.contains('cards--height-content')) {
      cards.classList.remove('cards--height-content')
      buttonSeeMore__text.textContent = 'Показать';
      buttonSeeMore__img.classList.remove('brands-button__img--rotate');
    } else {
      cards.classList.add('cards--height-content')
      buttonSeeMore__text.textContent = 'Скрыть';
      buttonSeeMore__img.classList.add('brands-button__img--rotate');
    }
  });

let newSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 'auto',
  breakpoints: {
    767: {
      enabled: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// ____________________________________________

const burgerButton = document.querySelector(".burger-button"); 
const acideMenu = document.querySelector(".acide-menu")
const burgerButtonClose = document.querySelector(".burger-close-button");

burgerButton.addEventListener('click', function () {
    acideMenu.classList.remove('acide-menu--display-none') 
});

burgerButtonClose.addEventListener('click', function () {
    acideMenu.classList.add('acide-menu--display-none')
});






