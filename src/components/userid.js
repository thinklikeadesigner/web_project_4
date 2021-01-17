// import css from "./index.css";
// import Card from "./components/Card.js";
// import Section from "./components/Section.js";
// import {
//   cardsConfig,
//   popupConfig,
//   profileConfig,
//   settings,
// } from "./utils/constants.js";
// import PopupWithImage from "./components/PopupWithImage.js";
// import PopupWithForm from "./components/PopupWithForm.js";
// import { UserInfo } from "./components/UserInfo.js";
// import FormValidator from "./components/FormValidator.js";
// import Api from "./components/Api.js";
// // import { profile } from "";

// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/group-5",
//   headers: {
//     authorization: "b0d2099d-1e3e-49c8-a58b-52391c0a6488",
//     "Content-Type": "application/json",
//   },
// });

// api.getCardList().then((res) => {
//   // console.log(res);
//   //adds section with initial cards
//   const cardsList = new Section(
//     {
//       array: res,

//       // initiates card class with data from initial cards
//       renderer: (data) => {
//         const card = new Card(
//           {
//             data,
//             handleCardClick: () => {
//               picModal.open(data);
//             },
//             handleDeleteClick: (cardID) => {
//               api.removeCard(cardID);
//             },
//           },
//           cardsConfig.cardSelector
//         );
//         //sets generates card and assigns to cardElement
//         const avatar = document.querySelector(".profile__pic");
//         //takes cardElement and adds to dom
//         cardsList.setItem(card.generateCard());
//         api.getUserInfo().then((res) => {
//           if (res._id == data.owner._id) {
//             card.showDeleteButton();
//           }

//           userInfo.setUserInfo({
//             userName: res.name,
//             userDescription: res.about,
//           });
//         });
//       },
//     },
//     cardsConfig.placesWrap
//   );
//   cardsList.renderItems();

//   //adds form with submit logic, and the submit handler creates the cards on submit and adds the cards to the dom
//   const addModal = new PopupWithForm({
//     popupSelector: popupConfig.addFormModalWindow,
//     handleFormSubmit: (data) => {
//       api.addCard(data).then((res) => {
//         const card = new Card(
//           {
//             data,
//             handleCardClick: () => {
//               picModal.open(data);
//             },

//           },
//           cardsConfig.cardSelector
//         );
      
//         cardsList.setItem(card.generateCard());
//         card.showcard();
//       });
//     },
//   });
//   addModal.setEventListeners();

//   document
//     .querySelector(".profile__add-btn")
//     .addEventListener("click", function () {
//       addModal.open();
//     });
// });

// const userInfo = new UserInfo(
//   profileConfig.profileTitle,
//   profileConfig.profileDescription
// );

// const editModal = new PopupWithForm({
//   popupSelector: ".modal_type_edit",

//   // logic for submit button
//   handleFormSubmit: ({ name, about }) => {
//     api.setUserInfo({ name, about }).then((res) => {
//       userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
//     });
//   },
// });

// // adds validators for both forms, and iniates the image modal
// const validateAdd = new FormValidator(settings, ".form_add");

// const validateEdit = new FormValidator(settings, ".form_edit");
// const picModal = new PopupWithImage(".modal_type_pic");

// // sets event listeners and calls class methods
// document
//   .querySelector(".profile__edit-btn")
//   .addEventListener("click", () => editModal.open());
// //

// document
//   .querySelector(".profile__pic")
//   .addEventListener("click", () => avatarModal.open());

// const avatarModal = new PopupWithForm({
//   popupSelector: popupConfig.avatarFormModalWindow,

//   handleFormSubmit: (avatar) => {
//     api.setUserAvatar(avatar).then((res) => {
//       document.querySelector(".profile__pic").src = res.avatar;
//       // console.log(res);
//     });

//     // console.log(avatar);
//   },
// });

// //  api.getUserInfo().then((res) => {
// //       if (res._id == data.owner._id) {
// //         card.showDeleteButton();
// //       }

// //         userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
// //       });

// editModal.setEventListeners();

// picModal.setEventListeners();
// validateEdit.enableValidation();
// validateAdd.enableValidation();
// avatarModal.setEventListeners();
// export default class Card {
//   constructor(
//     { data, handleCardClick, handleDeleteClick, handleCardLike }, userID,
//     cardSelector
//   ) {
//     this._title = data.name;
//     this._url = data.link;
//     this._likes = data.likes;
//     this.cardSelector = cardSelector;
//     this._handleCardClick = handleCardClick;
//     this._handleDeleteClick = handleDeleteClick;
//     this._handleCardLike = handleCardLike;
//     this._cardTemplate = document.querySelector("#card__template").content.querySelector(".card")
//     this._id = data._id;
//     this._ownerID = data.owner;
// this._card = this._cardTemplate.cloneNode(true);
//     this._data = data;
//     this._userID = userID;
//     this._owner = data.owner;
//     this.heart = this._card.querySelector(".card__heart");
//   }

//   id() {
//     return this._id;
//   }

//   returnLikes() {

//     return this._likes;
//   }

//   // _showMyLikes() {
//   //   if (this._likes.some((like) => {
//   //     like._id === this._userID;})) {
//   //     this._card.querySelector(".card__heart").classList.add("card__heart_active");
//   //   }
//   //   else {console.log('no')}
//   // }

//   displayLikeCount(numberOfLikes) {
//     this._card.querySelector(".card__likes_count").textContent = numberOfLikes;
//   }

//   handleDeleteCard() {
//     this._card.remove();
//     this._card = null;
//   };

//   showDeleteButton() {
//     if(this._owner._id === this._userId) {
//       this._deleteBtn.classList.add("card_show-delete-btn");
//     }


//   }


//   _setEventListeners() {

//     this._cardLikeBtn.addEventListener("click", () => {

//       this._handleCardLike(this.id());
    
//     });
//     this._deleteBtn.addEventListener("click", () => {
//       this._handleDeleteClick(this.id(), this._card)
//     });
//     this._cardPic.addEventListener("click", () => this._handleCardClick());
//     // if (this._owner._id !== this._userID) {
//     //   cardDeleteButton.style.display = 'none';
//     // }

//     // this._showMyLikes();
//   }



  

//   _setElements() {
//     this._cardPic.src = this._url;
//     this._cardPic.setAttribute("alt", this._title);
//     this._cardTitle.textContent = this._title;
//   }

//   generateCard() {
//     this._element = this._card;
//     this._cardPic = this._card.querySelector(".card__pic");
//     this._cardTitle = this._card.querySelector(".card__title");
//     this._deleteBtn = this._card.querySelector(".card__delete-btn");
//     this._cardLikeBtn = this._card.querySelector(".card__heart");
//     this._cardCount = this._card.querySelector(".card__likes_count");

//     this._setEventListeners();
//     this._setElements();

//     return this._card;
//   }
// }
