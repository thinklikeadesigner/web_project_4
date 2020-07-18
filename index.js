const pencil = document.querySelector(".edit");
const closeButton = document.querySelector(".popUp__close-button");
const popUp = document.querySelector(".popUp");
const form = document.querySelector(".form");
// const nameInput = document.querySelector(".form__input_type_name");
// const jobInput = document.querySelector(".form__input_type_info");
// const cardInput = document.querySelector(".card__value_type_name");
// const jobInput = document.querySelector(".card__value_type_job");

function togglePopUp() {
  popUp.classList.toggle("popUp_open");
  console.log(open);
}

pencil.addEventListener("click", togglePopUp);

closeButton.addEventListener("click", togglePopUp);

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   console.log(nameInput.value, jobInput.value);
// });

// form__input_type_name
// form__input_type_job

// card__nalue_type_name
// card__value_type_job

// <input type="text class=" value="kate">
