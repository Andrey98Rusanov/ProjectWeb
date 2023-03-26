import { acideMenu } from "./acide.js";
import { mainPage } from "./acide.js";

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

  mainPage.classList.add("blur")
  if(getComputedStyle(acideMenu).position == "static"){
    acideMenu.classList.add('blur')
  }
  name.classList.add("modal__info--display-none")
  mail.classList.add("modal__info--display-none")
  message.classList.add("modal__info--display-none")

});
}

closeModalButton.addEventListener('click', function () {
  Modal.classList.remove('modal-open')
  mainPage.classList.remove("blur")
  acideMenu.classList.remove("blur")
});

for (let i = 0; i<2; i++) {
  openMessageButton[i].addEventListener('click', function () {
    Modal.classList.add('modal-open') 
    ModalTitle.textContent = "Обратная связь"

    mainPage.classList.add("blur")
    if(getComputedStyle(acideMenu).position == "static"){
      acideMenu.classList.add('blur')
    }
    name.classList.remove("modal__info--display-none")
    mail.classList.remove("modal__info--display-none")
    message.classList.remove("modal__info--display-none")
  });
  }