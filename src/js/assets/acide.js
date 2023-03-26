const burgerButton = document.querySelector(".burger-button"); 
export const acideMenu = document.querySelector(".acide-menu")
const burgerButtonClose = document.querySelector(".acide-close-button");
export const mainPage = document.querySelector(".main-page")

burgerButton.addEventListener('click', function () {
    acideMenu.classList.add('acide-menu--open')
    mainPage.classList.add("blur")
});

burgerButtonClose.addEventListener('click', function () {
  acideMenu.classList.remove('acide-menu--open')
  mainPage.classList.remove("blur")
});