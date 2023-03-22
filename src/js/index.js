import '../scss/style.scss'
const buttonSeeMore = document.querySelector(".brands-button");
const cards = document.querySelector('.cards');
const buttonSeeMore__text = document.querySelector('.brands-button__text')
const buttonSeeMore__img = document.querySelector('.brands-button__img')

buttonSeeMore.addEventListener('click', function () {
    if (cards.classList.contains('cards--height-content')) {
      cards.classList.remove('cards--height-content')
      buttonSeeMore__text.textContent = 'Показать все';
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
const burgerButtonClose = document.querySelector(".acide-close-button");

burgerButton.addEventListener('click', function () {
    acideMenu.classList.add('acide-menu--open') 
});

burgerButtonClose.addEventListener('click', function () {
  acideMenu.classList.remove('acide-menu--open')
});

// _________________
const buttonSeeMoreRep = document.querySelector(".brands-button--repair");
const cardsRep = document.querySelector('.cards--repair');
const buttonSeeMoreRep__text = document.querySelector('.brands-button__text--repair')
const buttonSeeMoreRep__img = document.querySelector('.brands-button__img--repair')

buttonSeeMoreRep.addEventListener('click', function () {
  if (cardsRep.classList.contains('cards--height-content')) {
    cardsRep.classList.remove('cards--height-content')
    buttonSeeMoreRep__text.textContent = 'Показать все';
    buttonSeeMoreRep__img.classList.remove('brands-button__img--rotate');
  } else {
    cardsRep.classList.add('cards--height-content')
    buttonSeeMoreRep__text.textContent = 'Скрыть';
    buttonSeeMoreRep__img.classList.add('brands-button__img--rotate');
  }
});

// _____________________

const text = document.querySelector('.content-block__text');
const ButtonSeeMoreText = document.querySelector('.button');
const ButtonSeeMoreText__text = document.querySelector(".button__text")
const ButtonSeeMoreText__img = document.querySelector(".button__img")

ButtonSeeMoreText.addEventListener('click', function () {
  if(text.classList.contains('content-block--height-content')) {
    text.classList.remove('content-block--height-content');
    ButtonSeeMoreText__text.textContent = 'Читать далее';
    ButtonSeeMoreText__img.classList.remove('brands-button__img--rotate');
  } else {
    text.classList.add('content-block--height-content');
    ButtonSeeMoreText__text.textContent = 'Скрыть';
    ButtonSeeMoreText__img.classList.add('brands-button__img--rotate');
  }
});




