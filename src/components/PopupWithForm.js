import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._formElement = this._popupSelector.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
  }
  open() {
    super.open();
  }

  close() {
    super.close();
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
