// const list = document.querySelector(".cards__list");

// // array of tasks for today

// // convert the array of tasks for today to an array of elements

// // add the element to the DOM by unfolding the array
// list.append(...taskElements);

const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");
const addButton = document.querySelector(".add");

const modal = document.querySelector(".modal");
const modalPic = document.querySelector(".modal__pic");
const form = document.querySelector(".form");

const topInput = document.querySelector(".form__input_type_top");
const bottomInput = document.querySelector(".form__input_type_bottom");
const titleInput = document.querySelector(".form__input_type_title");
const urlInput = document.querySelector(".form__input_type_image");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const formHeader = document.querySelector(".form__title");
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

function setAttributes(element, attribute) {
  for (var key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

function addCard(titleValue, imageValue) {
  const cardTemplate = document.querySelector("#card__template").content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = titleValue;
  cardElement.querySelector(".card__pic").src = imageValue;
  cardElement.querySelector(".card__pic").addEventListener("click", togglePic);
  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__heart_active");
      console.log("liked");
    });

  cardsList.prepend(cardElement);
}

function togglePic() {
  modalPic.classList.toggle("modal_open");
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
  topInput.value = "";
  bottomInput.value = "";

  toggleModal();
});
closeButton.addEventListener("click", toggleModal);
document
  .querySelector(".modal__close-button_pic")
  .addEventListener("click", togglePic);

form.addEventListener("submit", formSubmitHandler);

console.log("jsfiddle example" + "https://jsfiddle.net/496tafdu/2/");

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

initialCards.forEach((data) => {
  addCard(data.name, data.link);
});
// so tired
