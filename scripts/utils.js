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

function toggleModalWindow(modal) {
  if (modal.classList.contains("open_modal")) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
}

function closeModal(modal) {
  modal.classList.remove("open_modal");
  window.removeEventListener("click", closeClickModal);
  document.removeEventListener("keydown", keydownClose);
}
function openModal() {
  modal.classList.add("open_modal");
  window.addEventListener("click", closeClickModal);
  document.addEventListener("keydown", keydownClose);
}

export {
  keydownClose,
  closeClickModal,
  toggleModalWindow,
  closeModal,
  openModal,
};
