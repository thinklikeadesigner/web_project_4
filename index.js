const pencil = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popUp__close-button");
const submitButton = document.querySelector(".form__button");

const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopUp();
}

pencil.addEventListener("click", togglePopUp);
closeButton.addEventListener("click", togglePopUp);
form.addEventListener("submit", formSubmitHandler);
