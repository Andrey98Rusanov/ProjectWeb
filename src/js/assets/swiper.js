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