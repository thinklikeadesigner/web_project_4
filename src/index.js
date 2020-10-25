import css from "./index.css";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import {
  cardsConfig,
  popupConfig,
  profileConfig,
  settings,
} from "./utils/constants.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import Api from "./components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-5",
  headers: {
    authorization: "b0d2099d-1e3e-49c8-a58b-52391c0a6488",
    "Content-Type": "application/json",
  },
});

api.getCardList().then((res) => {
  //adds section with initial cards
  const cardsList = new Section(
    {
      array: res,

      // initiates card class with data from initial cards
      renderer: ({ name, link }) => {
        const card = new Card(
          { name, link, handleCardClick: () => picModal.open(name, link) },
          cardsConfig.cardSelector
        );
        //sets generates card and assigns to cardElement

        //takes cardElement and adds to dom
        cardsList.setItem(card.generateCard());
      },
    },
    cardsConfig.placesWrap
  );
  cardsList.renderItems();
});

const userInfo = new UserInfo(
  profileConfig.profileTitle,
  profileConfig.profileDescription
);

api.getUserInfo().then((res) => {
  console.log("places", res);

  userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
});

// adds validators for both forms, and iniates the image modal
const validateAdd = new FormValidator(settings, ".form_add");

const validateEdit = new FormValidator(settings, ".form_edit");
const picModal = new PopupWithImage(".modal_type_pic");

//adds form with submit logic, and the submit handler creates the cards on submit and adds the cards to the dom
const addModal = new PopupWithForm({
  popupSelector: popupConfig.cardFormModalWindow,
  handleFormSubmit: ({ name, link }) => {

api.addCard({ name, link }).then( res => {
  
});

  //   const card = new Card(
  //     { name, link,
  //       handleCardClick: () => {
  //         picModal.open(name, link)};
  //        },
  //     cardsConfig.cardSelector
  //   );
  // cardsList.setItem(card.generateCard());
  },
});

//initiates class for edit form
// const editModal = new PopupWithForm({
//   popupSelector: ".modal_type_edit",

//   // logic for submit button
//   handleFormSubmit: () => {
//     //initiates class to get and set user profile
//     const profile = new UserInfo({
//       inputName: ".form__input_type_name",
//       inputJob: ".form__input_type_job",
//     });

//     // takes info from profile and fills form
//     profile.getUserInfo();

//     //takes info from input and updates profile
//     profile.setUserInfo();
//   },
// });

//sets event listeners and calls class methods
document
  .querySelector(".profile__edit-btn")
  .addEventListener("click", () => editModal.open());
document
  .querySelector(".profile__add-btn")
  .addEventListener("click", () => addModal.open());

// editModal.setEventListeners();
addModal.setEventListeners();
picModal.setEventListeners();
validateEdit.enableValidation();
validateAdd.enableValidation();
