function showInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector(`#${input.id}-error`);

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = "";
}

function checkInputValidity(form, input, rest) {
  if (!input.validity.valid) {
    showInputError(form, input, rest);
  } else {
    hideInputError(form, input, rest);
  }
}

function hasInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass);
  } else {
    button.classList.remove(inactiveButtonClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...rest
}) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);

    if (form == formAdd) {
      toggleButtonState(inputs, button, rest);
    }

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(form, input, rest);
        toggleButtonState(inputs, button, rest);
      });
    });
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
