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
let cardIds = []
api.getCardOwner().then((res) => 
{

  for (let i = 0; i < res.length; i++) {

   cardIds.push(res[i].owner._id);


}
return cardIds


})

console.log(cardIds)

api.getCardList()
.then((res) => {
  // console.log(res);
  //adds section with initial cards
  const cardsList = new Section(
    {
      array: res,

      // initiates card class with data from initial cards
      renderer: (data) => {
        const card = new Card({
           data,
            handleCardClick: () => {
            picModal.open(data);
          },
          handleDeleteClick:  (cardID) => {
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
            card.showcard();
          }
          
            userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
          });
      },
    },
    cardsConfig.placesWrap
  );
  cardsList.renderItems();



//adds form with submit logic, and the submit handler creates the cards on submit and adds the cards to the dom
const addModal = new PopupWithForm({
  popupSelector: popupConfig.cardFormModalWindow,
  handleFormSubmit: (data) => {

api.addCard(data).then( res => {
  const card = new Card({
    data,
     handleCardClick: () => {
       picModal.open(data);
     },
  //    handleDeleteClick: (cardId) => {

  //     api.removeCard(cardId);
  //  },
   }, cardsConfig.cardSelector);
   cardsList.setItem(card.generateCard());
});
 
  },
});
addModal.setEventListeners();

document
  .querySelector(".profile__add-btn")
  .addEventListener("click", function () {addModal.open()});

});

const userInfo = new UserInfo(
  profileConfig.profileTitle,
  profileConfig.profileDescription
);




  const editModal = new PopupWithForm({
    popupSelector: ".modal_type_edit",
  
    // logic for submit button
    handleFormSubmit: ({name, about}) => {
      api.setUserInfo({name, about }).then((res) => {
        userInfo.setUserInfo({ userName: res.name, userDescription: res.about });
    },
      )
}});

// adds validators for both forms, and iniates the image modal
const validateAdd = new FormValidator(settings, ".form_add");

const validateEdit = new FormValidator(settings, ".form_edit");
const picModal = new PopupWithImage(".modal_type_pic");



// initiates class for edit form
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

// sets event listeners and calls class methods
document
  .querySelector(".profile__edit-btn")
  .addEventListener("click", () => editModal.open());
//  

editModal.setEventListeners();
// addModal.setEventListeners();
picModal.setEventListeners();
validateEdit.enableValidation();
validateAdd.enableValidation();
