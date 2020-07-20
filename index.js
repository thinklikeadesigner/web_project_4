const pencil = document.querySelector(".edit");
const closeButton = document.querySelector(".popUp__close-button");
const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const submitButton = document.querySelector(".form__button");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
  console.log("toggleEditPopUp");
}

closeButton.addEventListener("click", togglePopUp);

pencil.addEventListener("click", togglePopUp);

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  togglePopUp();
});
