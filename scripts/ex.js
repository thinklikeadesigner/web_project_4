function showInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector("#" + input.id + "-error");

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
}

function hideInputError(form, input, { errorClass, inputErrorClass, ...rest }) {
  const error = form.querySelector("#" + input.id + "-error");

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
  error.textContent = "";
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    hideInputError(form, input, rest);
  } else {
    showInputError(form, input, rest);
  }
}

function toggleSubmitButton(inputs, button, { inactiveButtonClass, ...rest }) {
  const isInvalid = inputs.some((input) => {
    return !input.validity.valid;
  });

  if (isInvalid) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute("disabled", true);
  } else {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute("disabled");
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...rest
}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(form, input, rest);
        toggleSubmitButton(inputs, button, rest);
      });
    });
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
