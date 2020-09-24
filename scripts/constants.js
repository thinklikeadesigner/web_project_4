
const initialCards = [
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    },
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg",
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    },
  ];

  const imgModal = document.querySelector(".modal__img");
const imgModalWindow = document.querySelector(".modal_type_pic");
const addModalWindow = document.querySelector(".modal_type_add");
const editModalWindow = document.querySelector(".modal_type_edit");


const settings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_visible",
  };
  
  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__job");
  
  const inputName = document.querySelector(".form__input_type_name");
  const inputJob = document.querySelector(".form__input_type_job");
  const inputTitle = document.querySelector(".form__input_type_title");
  const inputUrl = document.querySelector(".form__input_type_url");
  
  const closeButtonEdit = document.querySelector(".modal__close-button_edit");
  const closeButtonAdd = document.querySelector(".modal__close-button_add");
  const closeButtonImg = document.querySelector(".modal__close-button_pic");
  
  const formEdit = document.querySelector(".form_edit");
  const formAdd = document.querySelector(".form_add");
  
  const addButton = document.querySelector(".profile__add-btn");
  const editButton = document.querySelector(".profile__edit-btn");
  
  const list = document.querySelector(".cards__list");

  export {list, editButton, addButton, formAdd, formEdit, closeButtonImg, closeButtonEdit, closeButtonAdd, inputUrl, inputTitle, inputJob, inputName, profileJob, profileName, settings, editModalWindow, addModalWindow, imgModalWindow, imgModal, initialCards}