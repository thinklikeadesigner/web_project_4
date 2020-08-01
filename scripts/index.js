
// const list = document.querySelector(".cards__list");

// // array of tasks for today

// // convert the array of tasks for today to an array of elements

// // add the element to the DOM by unfolding the array
// list.append(...taskElements);


const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");

const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");


const formHeader = document.querySelector(".form__title");
const cardsList = document.querySelector(".cards__list");
const heart = document.querySelector(".card__heart");


function closeModal() {
  modal.classList.remove("modal_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}


function addCard(titleValue, imageValue) {
  const cardTemplate = document.querySelector("#card__template").content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = titleValue;
  cardElement.querySelector(".card__pic").src = imageValue;

  document
    .querySelector(".card__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__heart_active");
      console.log("liked");
    });

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

// heart.addEventListener("click", function (evt) {
//   evt.preventDefault(evt);
//   heart.classList.toggle("card__heart_active");
// });
// initialCards.forEach((task) => {
//   return addCard(initialCards.name, initialCards.link);
// });

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

