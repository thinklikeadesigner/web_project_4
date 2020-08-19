function showErrorMessage(form, input, settings) {
  const error = document.querySelector(`#${input.id}-error`);
  console.log(error);
  error.textContent = input.validationMessage;
  error.classList.add(settings.errorClass);
  input.classList.add(settings.inputErrorClass);
}

function toggleButtonState(inputs, button, settings) {
  const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    console.log("valid button");
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    console.log("not valid button");
    button.classList.add(settings.inactiveButtonClass);
  }
}

function hideErrorMessage(form, input, settings) {
  const error = document.querySelector(`#${input.id}-error`);
  console.log(error);
  error.textContent = "";
  error.classList.remove(settings.errorClass);
  input.classList.remove(settings.inputErrorClass);
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    console.log("im valid");
    hideErrorMessage(form, input, settings);
  } else {
    showErrorMessage(form, input, settings);
  }
}

function enableValidation(settings) {
  const forms = [...document.querySelectorAll(settings.formSelector)];

  forms.forEach((form) => {
    console.log("for every form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const inputs = [...document.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputs, button, settings);

    inputs.forEach((input) => {
      console.log("for every input");
      input.addEventListener("input", () => {
        console.log("listening for input");
        checkInputValidity(form, input, settings);
        toggleButtonState(inputs, button, settings);
      });
    });
  });
}
const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_visible",
};

enableValidation(settings);
