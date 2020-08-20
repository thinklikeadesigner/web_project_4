function showErrorMessage(
  form,
  input,
  { errorClass, inputErrorClass, ...rest }
) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(errorClass);
}

function hideErrorMessage(
  form,
  input,
  { errorClass, inputErrorClass, ...rest }
) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = "";
}

function checkInputValidity(form, input, rest) {
  if (input.validity.valid) {
    hideErrorMessage(form, input, rest);
  } else {
    showErrorMessage(form, input, rest);
  }
}

function toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {
  const isValid = inputs.every((input) => input.validity.valid);

  if (isValid) {
    button.classList.remove(inactiveButtonClass);
  } else {
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...rest
}) {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  const forms = Array.from(document.querySelectorAll(formSelector));

  // Iterate over the resulting array
  forms.forEach((form) => {
    // Cancel default behavior for each form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // It will find all forms with the specified class in DOM, and
    // make an array from them using the Array.from() method
    const inputs = Array.from(document.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);
    toggleButtonState(inputs, button, rest);

    // Iterate over the resulting array
    inputs.forEach((input) => {
      console.log("for every input");
      input.addEventListener("input", () => {
        checkInputValidity(form, input, rest);
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
