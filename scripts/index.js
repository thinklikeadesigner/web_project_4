const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");

const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function openmodal() {
  modal.classList.add("modal_open");
}

function closemodal() {
  modal.classList.remove("modal_open");
}

function preFill() {
  if ((modal["class"] = "modal_open")) {
    console.log("opened modal");
    nameInput.value = profileName.textContent;
    console.log('changed value="" for name');
    jobInput.value = profileJob.textContent;
    console.log('changed value="" for job');
  }
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closemodal();
}

editButton.addEventListener("click", openmodal);
editButton.addEventListener("click", preFill);

closeButton.addEventListener("click", closemodal);
closeButton.addEventListener("click", preFill);

form.addEventListener("submit", formSubmitHandler);
