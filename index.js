const pencil = document.querySelector(".edit");
const closeButton = document.querySelector(".popUp__close-button");
const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
  console.log("why won't this work");
}

function togglePopUpOdd() {
  popUp.classList.toggle("popUp_open");
  popUp.classList.toggle("popUp_open");
}

closeButton.addEventListener("click", togglePopUpOdd);
pencil.addEventListener("click", togglePopUp);

// function formSubmitHandler(e) {
//   e.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   togglePopUp();
// }

form.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopUp();
});
