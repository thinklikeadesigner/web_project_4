import Popup from "./Popup.js";

import { inputJob, inputName, profileName, profileJob } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formEdit = document.querySelector(".form_edit");
    this._formAdd = document.querySelector(".form_add");
    

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
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input");

    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }
}
