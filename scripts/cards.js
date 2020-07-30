{
  /* <ul class="cards__list"> */
}

<template id="card__template">
  <li class="card">
    <img src="" alt="" class="card__pic" />

    <div class="card__text">
      <h2 class="card__title">Yosemite Valley</h2>
      <button class="card__heart"></button>
    </div>
  </li>
</template>;

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardTemplate = document.querySelector("#card__template").content;
const cardsList = document.querySelector(".cards__list");

const listItem = cardTemplate.cloneNode(true);

// listItem.querySelector(".card__pic").src =
//   "https://code.s3.yandex.net/web-code/yosemite.jpg";
// listItem.querySelector(".card__pic").alt = "Yosemite Valley";
// listItem.querySelector(".card__title").textContent = "Yosemite Valley";

cardsList.append(listItem);

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
