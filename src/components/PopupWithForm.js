import Popup from "./Popup.js";

import { inputJob, inputName, profileName, profileJob } from "../utils/utils.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._formElement = this._popupSelector.querySelector(".form")
    this._handleFormSubmit = handleFormSubmit;
    // this._formEdit = document.querySelector(".form_edit");
    // this._formAdd = document.querySelector(".form_add");
    // this._formAvatar = document.querySelector(".form_avatar");
    // this._formDelete = document.querySelector(".modal_type_delete");


  }
  open() {
    super.open();
//TODO
//done
    //NEED TO FIX:
    // This is used not only for profile popup so it is not correct
    // that when you open any popup the input fields of one particular form are filled.
    // It would be better to set up the values inside the index.js

  }

  close() {
    super.close();

    //done
    // TODO
    //NEED TO FIX:
    // In future, there might be a lot of other different popups
    // and reset all of them here is not quite correct.
    // You have two option: you may reset when you close particular popup inside the index.js
    // or you should use popupSelector which you send as a parameter to the constructor
    // and use it for resetting here (this option is better). In this case, you might remove this._formEdit, this._formAdd and other class fields

    this._formElement.reset();
  }


  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }


  submitData(event) {
    this._handleFormSubmit = event;
  }






}
