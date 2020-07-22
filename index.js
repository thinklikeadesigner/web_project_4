const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close-button");

const popup = document.querySelector(".popup");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function togglepopup() {
  popup.classList.toggle("popup_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglepopup();
}

editButton.addEventListener("click", togglepopup);
closeButton.addEventListener("click", togglepopup);
form.addEventListener("submit", formSubmitHandler);
