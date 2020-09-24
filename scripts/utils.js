
function handleModalOpen(title, url) {
  imgModal.src = url;
  imgModal.setAttribute("alt", title);
  toggleModalWindow(imgModalWindow);
  const modalCaption = document.querySelector(".modal__caption");
  modalCaption.textContent = title;
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
