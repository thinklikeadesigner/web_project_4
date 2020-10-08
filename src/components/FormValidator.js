class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = document.querySelector(form);
  }

  _showInputError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
    error.textContent = input.validationMessage;
  }
  _hideInputError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._settings.inputErrorClass);
    error.classList.remove(this._settings.errorClass);
    error.textContent = "";
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }
  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  _toggleButtonState(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add(this._settings.inactiveButtonClass);
    } else {
      button.classList.remove(this._settings.inactiveButtonClass);
    }
  }
  _setEventListeners() {
    const inputs = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    );
    const button = this._form.querySelector(
      this._settings.submitButtonSelector
    );

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs, button);
      });
    });
  }
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
