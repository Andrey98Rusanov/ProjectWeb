import { Modal } from "./modal.js"
import { acideMenu } from "./acide.js"
import { overlay } from "./acide.js"
import { body } from "./acide.js"

  overlay.addEventListener('click', function () {
    Modal.classList.remove('modal-open')
    acideMenu.classList.remove('acide-menu--open')
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
    body.style.overflow = "auto"
});

document.addEventListener('keydown', function (e) {
  if(e.keyCode === 27) {
    Modal.classList.remove('modal-open')
    acideMenu.classList.remove('acide-menu--open')
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
    body.style.overflow = "auto"
  }
});



