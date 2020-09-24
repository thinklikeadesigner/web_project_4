import {
  toggleModalWindow,
  addModalWindow,
  editModalWindow,
  keydownClose,
  closeClickModal,
  imgModalWindow,
} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {list, editButton, addButton, formAdd, formEdit, closeButtonImg, closeButtonEdit, closeButtonAdd, inputUrl, inputTitle, inputJob, inputName, profileJob, profileName, settings, editModalWindow, addModalWindow, imgModalWindow, imgModal, initialCards} from "./constants.js";


const validateAdd = new FormValidator(settings, formAdd);
const validateEdit = new FormValidator(settings, formEdit);
validateEdit.enableValidation();
validateAdd.enableValidation();

const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#card__template");
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
    }
},
  list
);







