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

const userInfo = new UserInfo({
  userNameSelector: profileName,
  userDescriptionSelector: profileJob,
  userAvatarSelector: profileAvatar,
});

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
      this.close();
    })
    .catch((err) => {
      console.log(err);

      avatarSubmit.textContent = " Saving failed, try again...";
    });
}

api
  .getAppInfo()
  .then(([userData, cardListData]) => {
    userInfo.setUserInfo({
      userName: userData.name,
      userDescription: userData.about,
      userID: userData._id,
      userAvatar: userData.avatar,
    });

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
          })
          .catch((err) => {
            console.log(err);
            addSubmit.textContent = "Saving failed, try again...";
          });
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
            picModal.open(data);
          },
          handleDeleteClick: (cardID) => {
            deleteSubmit.textContent = "Yes";
            deleteCardModal.open(cardID);
            deleteCardModal.submitData(() => {
              deleteSubmit.textContent = "Deleting...";
              api
                .removeCard(cardID)
                .then(() => {})
                .then(() => {
                  card.deleteCard();
                  deleteCardModal.close();
                })
                .catch((err) => {
                  console.log(err);
                  deleteSubmit.textContent = "Deleting failed, try again...";
                });
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

const editModal = new PopupWithForm({
  popupSelector: editFormModalWindow,
  handleFormSubmit: ({ name, about }) => {
    editSubmit.textContent = "Saving...";

    api
      .setUserInfo({ name, about })
      .then((res) => {
        userInfo.setUserInfo({
          userName: res.name,
          userDescription: res.about,
        });
        editModal.close();
      })
      .catch((err) => {
        console.log(err);
        editSubmit.textContent = "Saving failed, try again...";
      });
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
  const user = userInfo.getUserInfo();
  inputJob.value = user.desc;
  inputName.value = user.title;
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
