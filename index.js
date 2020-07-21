console.log("hello");
const pencil = document.querySelector(".edit");
const closeButton = document.querySelector(".popUp__close-button");
const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
console.log("1");
const submitButton = document.querySelector(".form__button");
console.log("2");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
  console.log("toggleEditPopUp");
  return;
}

pencil.addEventListener("click", togglePopUp);
console.log("3");
closeButton.addEventListener("click", togglePopUp);

function formSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  togglePopUp();
  return;
}

form.addEventListener("submit", formSubmitHandler);
