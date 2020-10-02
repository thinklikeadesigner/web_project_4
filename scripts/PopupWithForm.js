import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = document.querySelector(".form");
    }


setEventListeners() {
  super.setEventListeners();
  this._form.reset();
  this._popupElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();

  })
}

_getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input");
    
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }
}
