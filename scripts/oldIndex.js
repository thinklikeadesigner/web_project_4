import {
    toggleModalWindow,
    addModalWindow,
    editModalWindow,
    keydownClose,
    closeClickModal,
    imgModalWindow,
  } from "./utils.js";
  import Card from "./Card.js";
  import FormValidator from "./FormValidator.js";
  
  
  
  const validateAdd = new FormValidator(settings, formAdd);
  const validateEdit = new FormValidator(settings, formEdit);
  validateEdit.enableValidation();
  validateAdd.enableValidation();
  
  const cardsList = new Section({
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card__template");
      const cardElement = card.generateCard();
      cardsList.setItem(cardElement);
      }
  },
    list
  );
  
  function AddFormSubmitHandler(evt) {
    evt.preventDefault();
    const card = new Card(inputTitle.value, inputUrl.value, "#card__template");
    const cardElement = card.generateCard();
    list.prepend(cardElement);
    toggleModalWindow(addModalWindow);
    formAdd.reset();
  }
  
  function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    toggleModalWindow(editModalWindow);
  }
  
  
  
    const cardElement = card.generateCard();
  
    cardsList.setItem(cardElement);
  });
  
  formEdit.addEventListener("submit", editFormSubmitHandler);
  formAdd.addEventListener("submit", AddFormSubmitHandler);
  
  addButton.addEventListener("click", () => {
    toggleModalWindow(addModalWindow);
    document.addEventListener("keydown", keydownClose);
    window.addEventListener("click", closeClickModal);
  });
  
  editButton.addEventListener("click", () => {
    if (!editModalWindow.classList.contains("modal_open")) {
      inputName.value = profileName.textContent;
      inputJob.value = profileJob.textContent;
    }
    toggleModalWindow(editModalWindow);
    document.addEventListener("keydown", keydownClose);
    window.addEventListener("click", closeClickModal);
  });
  
  closeButtonImg.addEventListener("click", () => {
    toggleModalWindow(imgModalWindow);
  });
  
  closeButtonEdit.addEventListener("click", () => {
    toggleModalWindow(editModalWindow);
    formEdit.reset();
  });
  
  closeButtonAdd.addEventListener("click", () => {
    toggleModalWindow(addModalWindow);
    formAdd.reset();
  });
  