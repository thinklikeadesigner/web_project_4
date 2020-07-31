// const list = document.querySelector(".cards__list");

// // array of tasks for today
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

// // convert the array of tasks for today to an array of elements

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
const cardElement = cardTemplate.cloneNode(true);
const cardsList = document.querySelector(".cards__list");
const heart = document.querySelector(".card__heart");

function toggleModal() {
  modal.classList.toggle("modal_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  if (modal.classList.contains("modal_add") === false) {
    profileName.textContent = topInput.value;
    profileJob.textContent = bottomInput.value;
  } else {
    addCard(topInput.value, bottomInput.value);
  }
  toggleModal();
}

function edit() {}

function setAttributes(element, attribute) {
  for (var key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

function addCard(titleValue, imageValue) {
  cardElement.querySelector(".card__title").textContent = titleValue;
  cardElement.querySelector(".card__pic").src = imageValue;
  cardsList.prepend(cardElement);
}

editButton.addEventListener("click", () => {
  modal.classList.remove("modal_add");
  formHeader.textContent = "Edit Profile";
  setAttributes(topInput, {
    placeholder: "Name",
    name: "name",
    value: "",
  });

  setAttributes(bottomInput, {
    placeholder: "About Me",
    name: "job",
    value: "",
  });
  topInput.value = profileName.textContent;
  bottomInput.value = profileJob.textContent;

  toggleModal();
});
addButton.addEventListener("click", () => {
  modal.classList.add("modal_add");
  formHeader.textContent = "New Place";
  setAttributes(topInput, {
    placeholder: "Title",
    name: "title",
    value: "",
  });

  setAttributes(bottomInput, {
    placeholder: "Image URL",
    name: "image",
    value: "",
  });

  toggleModal();
});
closeButton.addEventListener("click", toggleModal);
form.addEventListener("submit", formSubmitHandler);
heart.addEventListener("click", function (evt) {
  evt.preventDefault(evt);
  heart.classList.toggle("card__heart_active");
});
// initialCards.forEach((task) => {
//   return addCard(initialCards.name, initialCards.link);
// });

console.log();
