import { Modal } from "./modal.js"
import { acideMenu } from "./acide.js"
import { mainPage } from "./acide.js"

const blurClose = document.querySelector(".blur-close")
  blurClose.addEventListener('click', function () {
    Modal.classList.remove('modal-open')
    acideMenu.classList.remove('acide-menu--open')
    mainPage.classList.remove("blur")
    acideMenu.classList.remove("blur")
});