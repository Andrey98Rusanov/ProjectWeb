const burgerButton = document.querySelector(".burger-button"); 
export const acideMenu = document.querySelector(".acide-menu");
const burgerButtonClose = document.querySelector(".acide-close-button");
export const mainPage = document.querySelector(".main-page");
export const overlay = document.querySelector(".overlay");
export const body = document.querySelector(".allContent")

burgerButton.addEventListener('click', function () {
    acideMenu.classList.add('acide-menu--open')
    overlay.style.zIndex = "1"
    overlay.style.opacity = "0.9"
    overlay.style.visibility = "visible"
    body.style.overflow = "hidden"
});

burgerButtonClose.addEventListener('click', function () {
  acideMenu.classList.remove('acide-menu--open')
  overlay.style.opacity = "0"
  overlay.style.visibility = "hidden"
  body.style.overflow = "auto"
});