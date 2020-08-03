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

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");
const inputTitle = document.querySelector(".form__input_type_title");
const inputUrl = document.querySelector(".form__input_type_url");

const closeButtonEdit = document.querySelector(".modal__close-button_edit");
const closeButtonAdd = document.querySelector(".modal__close-button_add");
const closeButtonImg = document.querySelector(".modal__close-button_pic");

const addModalWindow = document.querySelector(".modal_type_add");
const editModalWindow = document.querySelector(".modal_type_edit");
const imgModalWindow = document.querySelector(".modal_type_pic");

const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");

const addButton = document.querySelector(".profile__add-btn");
const editButton = document.querySelector(".profile__edit-btn");

const list = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card__template").content;

const imgModal = document.querySelector(".modal__img");

function toggleModalWindow(modal) {
  modal.classList.toggle("modal_open");
}

function toggleEditWindow() {
  toggleModalWindow(editModalWindow);
}

function toggleAddWindow() {
  toggleModalWindow(addModalWindow);
}

function toggleImgWindow() {
  toggleModalWindow(imgModalWindow);
}

function AddFormSubmitHandler(e) {
  e.preventDefault();
  newCard(inputTitle.value, inputUrl.value);

  toggleAddWindow();
  inputTitle.value = "";
  inputUrl.value = "";
}

function editFormSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  toggleEditWindow();
}

function newCard(title, url) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardPic = cardElement.querySelector(".card__pic");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardHeart = cardElement.querySelector(".card__heart");
  const cardDelete = cardElement.querySelector(".card__delete-btn");

  cardPic.src = url;
  cardPic.setAttribute("alt", title);
  cardTitle.textContent = title;

  cardHeart.addEventListener("click", (e) =>
    e.target.classList.toggle("card__heart_active")
  );

  cardDelete.addEventListener("click", () => {
    const listItem = cardDelete.closest(".card");
    listItem.remove();
  });

  cardPic.addEventListener("click", () => {
    imgModal.src = url;
    imgModal.setAttribute("alt", title);
    const modalCaption = document.querySelector(".modal__caption");
    modalCaption.textContent = title;
    toggleImgWindow();
  });

  list.prepend(cardElement);
}

initialCards.forEach((data) => {
  newCard(data.name, data.link);
});

closeButtonImg.addEventListener("click", toggleImgWindow);
closeButtonEdit.addEventListener("click", toggleEditWindow);
closeButtonAdd.addEventListener("click", toggleAddWindow);

formEdit.addEventListener("submit", editFormSubmitHandler);
formAdd.addEventListener("submit", AddFormSubmitHandler);

addButton.addEventListener("click", toggleAddWindow);
editButton.addEventListener("click", () => {
  if (!editModalWindow.classList.contains("modal_open")) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }
  toggleEditWindow();
});
