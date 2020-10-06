import "../styles/index.css";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import { initialCards, settings } from "./utils/constants.js";
import PopupWithImage from "./components/PopupWithImage.js";

import PopupWithForm from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";

import FormValidator from "./components/FormValidator.js";

const validateAdd = new FormValidator(settings, formAdd);
const validateEdit = new FormValidator(settings, formEdit);
validateEdit.enableValidation();
validateAdd.enableValidation();


const picModal = new PopupWithImage(".modal_type_pic");
picModal.setEventListeners();

const cardsList = new Section(
  {
    array: initialCards,
    renderer: ({ name, link }) => {
      const card = new Card(
        { name, link, handleCardClick: () => picModal.open(name, link) },
        "#card__template"
      );

      const cardElement = card.generateCard();

      cardsList.setItem(cardElement);
    },
  },
  ".cards__list"
);

cardsList.renderItems();

const editModal = new PopupWithForm({
  popupSelector: ".modal_type_edit",
  handleFormSubmit: () => {
    const profile = new UserInfo({
      inputName: ".form__input_type_name",
      inputJob: ".form__input_type_job",
    });
    const infoArr = profile.getUserInfo();

    profile.setUserInfo();
  },
});
editModal.setEventListeners();

// const addModal = new PopupWithForm(".modal_type_add");
// addModal.setEventListeners();

const addModal = new PopupWithForm({
  popupSelector: ".modal_type_add",
  handleFormSubmit: ({name,link}) => {
    const card = new Card(
      {name, link, handleCardClick: (name, link) => picModal.open(name, link) },
      "#card__template"
    );

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
  },
});

addModal.setEventListeners();

document
  .querySelector(".profile__edit-btn")
  .addEventListener("click", () => editModal.open());
document
  .querySelector(".profile__add-btn")
  .addEventListener("click", () => addModal.open());


  
