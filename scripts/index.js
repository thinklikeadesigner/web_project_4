import Card from "./Card.js";
import Section from "./Section.js";
import {initialCards, settings} from './constants.js';
import PopupWithImage from "./PopupWithImage.js";
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const validateAdd = new FormValidator(settings, formAdd);
const validateEdit = new FormValidator(settings, formEdit);
validateEdit.enableValidation();
validateAdd.enableValidation();

const picModal = new PopupWithImage(".modal_type_pic");
picModal.setEventListeners();


const cardsList = new Section({
  array: initialCards,
  renderer: ({name, link}) => {
    const card = new Card({
      name,
      link,
      handleCardClick: () => picModal.open(name, link)
    }
      ,"#card__template");

    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
    },
  },
  '.cards__list'
);

cardsList.renderItems();

const editModal = new PopupWithForm({popupSelector: ".modal_type_edit", handleFormSubmit:
() => {

  const profile = new UserInfo(".profile__name", '.profile__job');
  const getInfo = profile.getUserInfo();

document.querySelector(".form__input_type_name").value = getInfo.name;
document.querySelector(".form__input_type_job").value = getInfo.job;



const setInfo = profile.setUserInfo();
document.querySelector(".profile__name")

},
});

editModal.setEventListeners();


const addModal = new PopupWithForm(
  {
    popupSelector: ".modal_type_add",
    handleFormSubmit: ({name, link}) => {
      const card = new Card({
        name,
        link,
        handleCardClick: () => picModal.open(name, link)
      }
        ,"#card__template");
  
      const cardElement = card.generateCard();
  
      cardsList.setItem(cardElement);
    }
});

addModal.setEventListeners();

document.querySelector('.profile__edit-btn').addEventListener("click", () => editModal.open());
document.querySelector('.profile__add-btn').addEventListener("click", () => addModal.open());
