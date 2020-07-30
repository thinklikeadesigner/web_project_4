// const list = document.querySelector(".cards__list");

// // array of tasks for today
// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg",
//   },
// ];

// // convert the array of tasks for today to an array of elements
// const taskElements = initialCards.map((task) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = initialCards;
//   return listItem;
// });

// // add the element to the DOM by unfolding the array
// list.append(...taskElements);

const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");
const addButton = document.querySelector(".add");

const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const topInput = document.querySelector(".form__input_type_top");
const bottomInput = document.querySelector(".form__input_type_bottom");
const titleInput = document.querySelector(".form__input_type_title");
const urlInput = document.querySelector(".form__input_type_image");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const formHeader = document.querySelector(".form__title");

const cardTemplate = document.querySelector("#card__template").content;
const cardsList = document.querySelector(".cards__list");

const cardElement = cardTemplate.cloneNode(true);
const title = document.querySelector(".input__text_type_top");
const image = document.querySelector(".input__text_type_bottom");
function toggleModal() {
  modal.classList.toggle("modal_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  if (modal.classList.contains("modal_add") === false) {
    console.log("NO modal_add");
    profileName.textContent = topInput.value;
    profileJob.textContent = bottomInput.value;
  } else {
    console.log("hAS modal_add");
    addCard();
  }

  toggleModal();
}

function edit() {
  modal.classList.remove("modal_add");
  formHeader.textContent = "Edit Profile";
  topInput.value = profileName.textContent;
  bottomInput.value = profileJob.textContent;

  toggleModal();
}

function addCard(titleValue, imageValue) {
  cardElement.querySelector(".card__title").textContent = topInput.value;
  cardElement.querySelector(".card__pic").src = bottomInput.value;
  cardsList.append(cardElement);
}

function add() {}

editButton.addEventListener("click", edit);
addButton.addEventListener("click", function () {
  toggleModal();
  modal.classList.add("modal_add");
  formHeader.textContent = "New Place";
  topInput.setAttribute("placeholder", "Title");
  bottomInput.setAttribute("placeholder", "Image URL");

  topInput.value = "";
  bottomInput.value = "";
});
closeButton.addEventListener("click", toggleModal);
form.addEventListener("submit", formSubmitHandler);
