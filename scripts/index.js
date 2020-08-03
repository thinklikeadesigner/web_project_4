//open edit button

//make togglewindow and edit specific modal
//add modal_open
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");
const inputTitle = document.querySelector(".form__input_type_title");
const inputUrl = document.querySelector(".form__input_type_url");
const closeButtonEdit = document.querySelector(".modal__close-button_edit");
const closeButtonAdd = document.querySelector(".modal__close-button_add");
const addButton = document.querySelector(".add");
const addModalWindow = document.querySelector(".modal_type_add");

const formEdit = document.querySelector(".form_edit");
const formAdd = document.querySelector(".form_add");
const editButton = document.querySelector(".profile__edit");
const editModalWindow = document.querySelector(".modal_type_edit");

function toggleEditWindow() {
  toggleModalWindow(editModalWindow);
}

function toggleAddWindow() {
  toggleModalWindow(addModalWindow);
}

function toggleModalWindow(modal) {
  modal.classList.toggle("modal_open");
}

editButton.addEventListener("click", () => {
  if (!editModalWindow.classList.contains("modal_open")) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }
  toggleEditWindow();
});

//make close button work, still specific to edit modal

closeButtonEdit.addEventListener("click", toggleEditWindow);

//make submit button work

function editFormSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  toggleEditWindow();
}

formEdit.addEventListener("submit", editFormSubmitHandler);
formAdd.addEventListener("submit", AddFormSubmitHandler);

//make add button modal work

addButton.addEventListener("click", toggleAddWindow);

//close button for add modal

closeButtonAdd.addEventListener("click", toggleAddWindow);

//now, use forEach method to add cards

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

const list = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card__template").content;

initialCards.forEach((data) => {
  newCard(data.name, data.link);
});

function newCard(title, url) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardPic = cardElement.querySelector(".card__pic");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardHeart = cardElement.querySelector(".card__heart");
  const cardDelete = cardElement.querySelector(".card__delete-btn");

  cardTitle.textContent = title;
  cardPic.src = url;

  cardHeart.addEventListener("click", (e) =>
    e.target.classList.toggle("card__heart_active")
  );

  cardDelete.addEventListener("click", () => {
    const listItem = cardDelete.closest(".card");
    listItem.remove();
  });

  cardPic.addEventListener("click", () => {
    img.src = cardPic.src;
    toggleImgWindow();
  });

  list.prepend(cardElement);
}

function AddFormSubmitHandler(e) {
  e.preventDefault();
  newCard(inputTitle.value, inputUrl.value);

  toggleAddWindow();
  inputTitle.value = "";
  inputUrl.value = "";
}

//selects the picture from inside the card created from template
const newCardPic = document.querySelector(".card__pic");

//selects the modal where I want to add the modal image
const imgModalWindow = document.querySelector(".modal__type_pic");

//modal image that will appear
const img = document.querySelector(".modal__img");

//selects modal's close button
const closeButtonImg = document.querySelector(".modal__close-button_pic");

//this function opens and closes the modal
function toggleImgWindow() {
  toggleModalWindow(imgModalWindow);
}

//event listener for when user clicks on picture. takes img from card, and inserts into modal
// newCardPic.addEventListener("click", () => {
//   img.src = newCardPic.src;
//   toggleImgWindow();
// });

//event listener to close the modal
closeButtonImg.addEventListener("click", toggleImgWindow);
