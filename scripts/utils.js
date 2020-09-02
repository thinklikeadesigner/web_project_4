const imgModal = document.querySelector(".modal__img");
const imgModalWindow = document.querySelector(".modal_type_pic");
const addModalWindow = document.querySelector(".modal_type_add");
const editModalWindow = document.querySelector(".modal_type_edit");
function handleModalOpen(title, url) {
  imgModal.src = url;
  imgModal.setAttribute("alt", title);
  toggleModalWindow(imgModalWindow);
  const modalCaption = document.querySelector(".modal__caption");
  modalCaption.textContent = title;
}

function toggleModalWindow(modal) {
  if (modal.classList.contains("modal_open")) {
    window.removeEventListener("click", closeClickModal);
    document.removeEventListener("keydown", keydownClose);
  } else {
    window.addEventListener("click", closeClickModal);
    document.addEventListener("keydown", keydownClose);
  }
  modal.classList.toggle("modal_open");
}
function keydownClose(evt) {
  if (evt.key === "Escape") {
    if (addModalWindow.classList.contains("modal_open")) {
      toggleModalWindow(addModalWindow);
    } else if (editModalWindow.classList.contains("modal_open")) {
      toggleModalWindow(editModalWindow);
    } else if (imgModalWindow.classList.contains("modal_open")) {
      toggleModalWindow(imgModalWindow);
    }
  }
}

function closeClickModal(evt) {
  if (evt.target === addModalWindow) {
    toggleModalWindow(addModalWindow);
  } else if (evt.target === editModalWindow) {
    toggleModalWindow(editModalWindow);
  } else if (evt.target === imgModalWindow) {
    toggleModalWindow(imgModalWindow);
  }
}
export {
  handleModalOpen,
  imgModal,
  imgModalWindow,
  toggleModalWindow,
  closeClickModal,
  keydownClose,
  addModalWindow,
  editModalWindow,
};
