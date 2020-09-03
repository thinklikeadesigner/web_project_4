import {
  toggleModalWindow,
  addModalWindow,
  editModalWindow,
  keydownClose,
  closeClickModal,
  imgModalWindow,
} from "./utils.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
];

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");
const inputTitle = document.querySelector(".form__input_type_title");
const inputUrl = document.querySelector(".form__input_type_url");

const closeButtonEdit = document.querySelector(".modal__close-button_edit");
const closeButtonAdd = document.querySelector(".modal__close-button_add");
const closeButtonImg = document.querySelector(".modal__close-button_pic");

const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");

const addButton = document.querySelector(".profile__add-btn");
const editButton = document.querySelector(".profile__edit-btn");

const list = document.querySelector(".cards__list");

const validateAdd = new FormValidator(settings, formAdd);
const validateEdit = new FormValidator(settings, formEdit);
validateEdit.enableValidation();
validateAdd.enableValidation();

function AddFormSubmitHandler(evt) {
  evt.preventDefault();
  const card = new Card(inputTitle.value, inputUrl.value, "#card__template");
  const cardElement = card.generateCard();
  list.prepend(cardElement);
  toggleModalWindow(addModalWindow);
  formAdd.reset();
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  toggleModalWindow(editModalWindow);
}

initialCards.forEach((data) => {
  const card = new Card(data.name, data.link, "#card__template");
  const cardElement = card.generateCard();
  list.prepend(cardElement);
});

formEdit.addEventListener("submit", editFormSubmitHandler);
formAdd.addEventListener("submit", AddFormSubmitHandler);

addButton.addEventListener("click", () => {
  toggleModalWindow(addModalWindow);
  document.addEventListener("keydown", keydownClose);
  window.addEventListener("click", closeClickModal);
});

editButton.addEventListener("click", () => {
  if (!editModalWindow.classList.contains("modal_open")) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }
  toggleModalWindow(editModalWindow);
  document.addEventListener("keydown", keydownClose);
  window.addEventListener("click", closeClickModal);
});

closeButtonImg.addEventListener("click", () => {
  toggleModalWindow(imgModalWindow);
});

closeButtonEdit.addEventListener("click", () => {
  toggleModalWindow(editModalWindow);
  formEdit.reset();
});

closeButtonAdd.addEventListener("click", () => {
  toggleModalWindow(addModalWindow);
  formAdd.reset();
});
