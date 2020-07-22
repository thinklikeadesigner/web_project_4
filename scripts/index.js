const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".modal__close-button");

const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function openModal() {
  modal.classList.add("modal_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeModal() {
  modal.classList.remove("modal_open");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
form.addEventListener("submit", formSubmitHandler);
