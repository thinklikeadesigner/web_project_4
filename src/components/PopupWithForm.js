import Popup from "./Popup.js";

import { inputJob, inputName, profileName, profileJob } from "../utils/utils.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formEdit = document.querySelector(".form_edit");
    this._formAdd = document.querySelector(".form_add");
    this._formAvatar = document.querySelector(".form_avatar");
    this._formDelete = document.querySelector(".modal_type_delete");
    

  }
  open() {
    super.open();
    inputJob.value = profileJob.textContent;
    inputName.value = profileName.textContent;
  }

  close() {
    super.close();
    this._formEdit.reset();
    this._formAdd.reset();
    this._formAvatar.reset();
  }


  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }


  submitData(event) {
    this._handleFormSubmit = event;
  }


  



}
