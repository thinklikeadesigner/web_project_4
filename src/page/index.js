import css from "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import {
  addSubmit,
  picFormModalWindow,
  deleteFormModalWindow,
  editSubmit,
  avatarSubmit,
  addModalButton,
  avatarModalButton,
  editModalButton,
  cardsConfig,
  settings,
  inputJob,
  profileAvatar,
  inputName,
  profileName,
  profileJob,
  deleteSubmit,
  addFormModalWindow,
  editFormModalWindow,
  avatarFormModalWindow,
} from "../utils/utils.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import { name } from "file-loader";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-5",
  headers: {
    authorization: "b0d2099d-1e3e-49c8-a58b-52391c0a6488",
    "Content-Type": "application/json",
  },
});

function changeAvatar({ avatar }) {
  avatarSubmit.textContent = "Saving...";
  api
    .setUserAvatar({ avatar })
    .then((res) => {
      avatarModalButton.src = res.avatar;

      //TODO
      //NEED TO FIX:
      // It is not quite correct that you are requesting api once again to set user's data
      // It would be better to create another method inside UserInfo class with will only set user's avatar
      api.getUserInfo().then(function (res) {
        userInfo.setUserInfo({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        });
      });
      this.close();
    })
    .catch((err) => console.log(err));
}

api
  .getAppInfo()
  .then(([userData, cardListData]) => {
    const cardsList = new Section(
      {
        items: cardListData,
        renderer: addCard,
      },
      cardsConfig.placesWrap
    );
    cardsList.renderItems();
    const addModal = new PopupWithForm({
      popupSelector: addFormModalWindow,
      handleFormSubmit: (data) => {
        addSubmit.textContent = "Saving...";
        api
          .addCard(data)
          .then((res) => {
            addCard(res);
            addModal.close();
            // addSubmit.textContent = "Save";
          })
          .catch((err) => console.log(err));
      },
    });
    addModal.setEventListeners();
    addModalButton.addEventListener("click", function () {
      addSubmit.textContent = "Save";
      addModal.open();
    });
    function addCard(data) {
      const card = new Card(
        {
          data,
          handleCardClick: () => {
            deleteSubmit.textContent = "Yes";
            // picModal.open(data);
          },
          handleDeleteClick: (cardID) => {
            deleteSubmit.textContent = "Yes";
            deleteCardModal.open(cardID);
            deleteCardModal.submitData(() => {
              deleteSubmit.textContent = "Deleting...";
              api
                .removeCard(cardID)
                .then(() => {
                  //done
                  // TODO
                  //NEED TO FIX:
                  //Removing the card in the template must be done only after sending a request to the server.
                  // Please, fix it also for the like button (so that the background is not changed in case of an unsuccessful request).
                  // Hint: You can set the offline mode in the network tab and try to submit forms, delete and like cards
                })
                .then(() => {
                  card.deleteCard();
                  deleteCardModal.close();
                })
                .catch((err) => console.log(err));
            });
          },
          handleCardLike: (cardID) => {
            {
              if (card.heart.classList.contains("card__heart_active")) {
                api
                  .deleteCardLike(cardID)
                  .then((res) => {
                    card.displayLikeCount(res.likes.length);
                  })
                  .then(() => {
                    card.heart.classList.remove("card__heart_active");
                  })
                  .catch((error) => console.log(error.type));
              } else {
                api
                  .addCardLike(cardID)
                  .then((res) => {
                    card.displayLikeCount(res.likes.length);
                  })
                  .then(() => {
                    card.heart.classList.add("card__heart_active");
                  })
                  .catch((error) => console.log(error.type));
              }
            }
          },
        },
        userData._id,
        cardsConfig.cardSelector
      );

      card.displayLikeCount(card._data.likes.length);
      cardsList.setItem(card.generateCard());
    }
  })
  .catch((err) => console.log(err));

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userDescriptionSelector: profileJob,
  userAvatarSelector: profileAvatar,
});
//TODO
//NEED TO FIX:
// You do not need to make request one again since you already requested user info with `getAppInfo`
api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo({
      userName: res.name,
      userDescription: res.about,
      userID: res._id,
      userAvatar: res.avatar,
    });
  })
  .catch((err) => console.log(err));

const editModal = new PopupWithForm({
  popupSelector: editFormModalWindow,
  handleFormSubmit: ({ name, about }) => {
    editSubmit.textContent = "Saving...";
    api
      .getUserInfo({ name, about })
      .then((res) => {
        profileJob.textContent = res.about;
        profileName.textContent = res.name;
      })
      .catch((err) => console.log(err));

    api
      .setUserInfo({ name, about })
      .then((res) => {
        userInfo.setUserInfo({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        });
        editModal.close();
      })
      .catch((err) => console.log(err));
      //done?
    //TODO
    //NEED TO FIX:
    //This modal window is closed even if the request is not successful
    // (you can set the offline mode in the network tab and try to submit the form).
    // You need to move this function call inside the block `then`.
    // Please fix this for all modal windows
  },
});

const avatarModal = new PopupWithForm({
  popupSelector: avatarFormModalWindow,
  handleFormSubmit: changeAvatar,
});

const deleteCardModal = new PopupWithForm({
  popupSelector: deleteFormModalWindow,
});

const picModal = new PopupWithImage(picFormModalWindow);

editModalButton.addEventListener("click", () => {
  editSubmit.textContent = "Save";
  inputJob.value = profileJob.textContent;
  inputName.value = profileName.textContent;
  editModal.open();
});
avatarModalButton.addEventListener("click", () => {
  avatarSubmit.textContent = "Save";
  avatarModal.open();
});

avatarModal.setEventListeners();
editModal.setEventListeners();
picModal.setEventListeners();
deleteCardModal.setEventListeners();

const validateAdd = new FormValidator(settings, ".form_add");
const validateEdit = new FormValidator(settings, ".form_edit");
const validateAvatar = new FormValidator(settings, ".modal_type_avatar");

validateEdit.enableValidation();
validateAdd.enableValidation();
validateAvatar.enableValidation();
