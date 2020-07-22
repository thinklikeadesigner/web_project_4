const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close-button");

const popup = document.querySelector(".popup");
const form = document.querySelector(".form");

const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_info");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function openPopup() {
  popup.classList.add("popup_open");
}

function closePopup() {
  popup.classList.remove("popup_open");
}

function preFill() {
  if ((popup["class"] = "popup_open")) {
    console.log("opened popup");
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
  closePopup();
}

editButton.addEventListener("click", openPopup);
editButton.addEventListener("click", preFill);

closeButton.addEventListener("click", closePopup);
closeButton.addEventListener("click", preFill);

form.addEventListener("submit", formSubmitHandler);
