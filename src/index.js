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
      renderer: (data) => {
        const card = new Card(
          {
            data,
            handleCardClick: () => {
              picModal.open(data);
            },
            handleDeleteClick: (cardID) => {
              api.removeCard(cardID);
            },
          },
          cardsConfig.cardSelector
        );
        //sets generates card and assigns to cardElement

        //takes cardElement and adds to dom
        cardsList.setItem(card.generateCard());

        api.getUserInfo().then((res) => {
          if (res._id == data.owner._id) {
            card.showDeleteButton();

            userInfo.setUserInfo({
              userName: res.name,
              userDescription: res.about,
              userAvatar: res.avatar,
            });
          } else {
            card.hideDeleteButton();
          }
        });
      },
    },
    cardsConfig.placesWrap
  );
  cardsList.renderItems();

  //adds form with submit logic, and the submit handler creates the cards on submit and adds the cards to the dom
  const addModal = new PopupWithForm({
    popupSelector: popupConfig.addFormModalWindow,
    handleFormSubmit: (data) => {
      api.addCard(data).then((res) => {
        const card = new Card(
          {
            data,
            handleCardClick: () => {
              picModal.open(data);
            },

            handleDeleteClick: (cardId) => {
              api.removeCard(cardId);
            },
          },
          cardsConfig.cardSelector
        );
        console.log(card);

        cardsList.setItem(card.generateCard());
        card.showDeleteButton();
      });
    },
  });
  addModal.setEventListeners();

  document
    .querySelector(".profile__add-btn")
    .addEventListener("click", function () {
      addModal.open();
    });
});

const editModal = new PopupWithForm({
  popupSelector: popupConfig.editFormModalWindow,

  // logic for submit button
  handleFormSubmit: ({ name, about }) => {
    api.setUserInfo({ name, about }).then((res) => {
      userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
    });
  },
});

const avatarModal = new PopupWithForm({
  popupSelector: popupConfig.avatarFormModalWindow,

  // logic for submit button
  handleFormSubmit: ({ avatar }) => {
    api.setUserAvatar({ avatar }).then((res) => {
      document.querySelector(".profile__pic").src = res.avatar;
      api.getUserInfo().then(function (res) {
        userInfo.setUserInfo({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        });
      });

      // sets event listeners and calls class methods
      document
        .querySelector(".profile__edit-btn")
        .addEventListener("click", () => editModal.open());
      //

      document
        .querySelector(".profile__pic")
        .addEventListener("click", () => avatarModal.open());

      // console.log(res);
    });

    // console.log(avatar);
  },
});

const userInfo = new UserInfo({
  userNameSelector: profileConfig.profileTitle,
  userDescriptionSelector: profileConfig.profileDescription,
  userAvatarSelector: profileConfig.profileAvatar,
});
console.log(userInfo);

api.getUserInfo().then((res) => {
  console.log(res.avatar);
  userInfo.setUserInfo({
    userName: res.name,
    userDescription: res.about,
    userAvatar: res.avatar,
  });
});
// adds validators for both forms, and iniates the image modal
const validateAdd = new FormValidator(settings, ".form_add");

const validateEdit = new FormValidator(settings, ".form_edit");
const picModal = new PopupWithImage(".modal_type_pic");

//  api.getUserInfo().then((res) => {
//       if (res._id == data.owner._id) {
//         card.showcard();
//       }

//   userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
// });

editModal.setEventListeners();
// addModal.setEventListeners();
picModal.setEventListeners();
validateEdit.enableValidation();
validateAdd.enableValidation();
avatarModal.setEventListeners();
