class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains(".modal__close-button") ||
        !evt.target.closest(".modal__container")
      ) {
      }
    });
  }
}

export default Popup;

// const editModal = new Popup('.modal_type_edit');
// editModal.setEventListeners();
// const addModal = new Popup('.modal_type_add');
// addModal.setEventListeners();
