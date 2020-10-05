import Card from "./Card.js";
import Section from "./Section.js";
import {initialCards} from './constants.js';
import PopupWithImage from "./PopupWithImage.js";

import PopupWithForm from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';

const picModal = new PopupWithImage(".modal_type_pic");
picModal.setEventListeners();


const cardsList = new Section({
  array: initialCards,
  renderer: ({name, link}) => {
    const card = new Card({name, link, handleCardClick: () => picModal.open(name, link)},   "#card__template");

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
    },
  },
  '.cards__list'
);

cardsList.renderItems();



const editModal = new PopupWithForm({popupSelector: ".modal_type_edit", handleFormSubmit:
() => {
  const profile = new UserInfo({inputName: ".form__input_type_name", inputJob: '.form__input_type_job'});
  const infoArr = profile.getUserInfo();
console.log(infoArr);


profile.setUserInfo();


}});
editModal.setEventListeners();

// const addModal = new PopupWithForm(".modal_type_add");
// addModal.setEventListeners();

// const editModal = new PopupWithForm({
//   popupSelector: ".modal_type_add",
//   handleFormSubmit: (item) => {
//     const card = new Card({item, handleCardClick: () => console.log("hello")},   "#card__template");

//     const cardElement = card.generateCard();

//     cardsList.setItem(cardElement);
//   }
// });

// addModal.setEventListeners();



// const editModal = new PopupWithForm({
//   popupSelector: ".modal_type_edit",
//   handleFormSubmit: () => {



//     const cardElement = card.generateCard();

//     cardsList.setItem(cardElement);
//   }
// });

