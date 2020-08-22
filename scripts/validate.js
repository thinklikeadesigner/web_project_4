const showInputError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add("form__input_error_line");
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add("form__input_error_visible");
};

const hideInputError = (form, input) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove("form__input_error_line");
  errorElement.classList.remove("form__input_error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input);
  } else {
    hideInputError(form, input);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputs, buttonElement) => {
  console.log(hasInvalidInput(inputs));
  if (hasInvalidInput(inputs)) {
    buttonElement.classList.add("form__button_disabled");
  } else {
    buttonElement.classList.remove("form__button_disabled");
  }
};

const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll(".form__input"));

  const buttonElement = form.querySelector(".form__button");

  if (form == formAdd) {
    toggleButtonState(inputs, buttonElement);
  }

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(form, input);
      toggleButtonState(inputs, buttonElement);
    });
  });
};

const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(".form"));
  forms.forEach((form) => {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(form);
  });
};

enableValidation();

// enableValidation({
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__button",
//   inactiveButtonClass: "form__button_disabled",
//   inputErrorClass: "form__input_error_line",
//   errorClass: "form__input_error_visible",
// });
