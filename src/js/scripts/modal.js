import { overlay } from "./acide.js"
import { body } from "./acide.js"

const openPhoneButton = document.querySelectorAll(".phone-modal-button"); 
export const Modal = document.querySelector(".modal")
const closeModalButton = document.querySelector(".modal__close-button");
const openMessageButton = document.querySelectorAll(".message-modal-button"); 
const ModalTitle = document.querySelector(".modal__text")
const name = document.querySelector(".modal__name")
const mail = document.querySelector(".modal__mail")
const message = document.querySelector(".modal__message")

for (let i = 0; i<2; i++) {
openPhoneButton[i].addEventListener('click', function () {
  Modal.classList.add('modal-open') 
  ModalTitle.textContent = "Заказать звонок"
  name.classList.add("modal__info--display-none")
  mail.classList.add("modal__info--display-none")
  message.classList.add("modal__info--display-none")
  overlay.style.zIndex = "2"
  overlay.style.opacity = "0.9"
  overlay.style.visibility = "visible"
  body.style.overflow = "hidden"
});
}

closeModalButton.addEventListener('click', function () {
  Modal.classList.remove('modal-open')
  overlay.style.opacity = "0"
  overlay.style.visibility = "hidden"
  body.style.overflow = "auto"
});

for (let i = 0; i<2; i++) {
  openMessageButton[i].addEventListener('click', function () {
    Modal.classList.add('modal-open') 
    ModalTitle.textContent = "Обратная связь"
    name.classList.remove("modal__info--display-none")
    mail.classList.remove("modal__info--display-none")
    message.classList.remove("modal__info--display-none")
    overlay.style.zIndex = "2"
    overlay.style.opacity = "0.9"
    overlay.style.visibility = "visible"
    body.style.overflow = "hidden"
  });
  }