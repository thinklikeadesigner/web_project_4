const pencil = document.querySelector(".edit");
const closeButton = document.querySelector(".popUp__close-button");
const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
  console.log(open);
}

pencil.addEventListener("click", togglePopUp);
closeButton.addEventListener("click", togglePopUp);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__job");

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  console.log(nameInput.value, jobInput.value);
  togglePopUp();
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   console.log(nameInput.value, jobInput.value);
// });

// form__input_type_name
// form__input_type_job

// card__nalue_type_name
// card__value_type_job

// <input type="text class=" value="kate">
