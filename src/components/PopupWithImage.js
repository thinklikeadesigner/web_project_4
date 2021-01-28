import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._modalCaption = document.querySelector(".modal__caption");
    this._modalImage = document.querySelector(".modal__img");
  }
  open(data) {
    super.open(data);
    this._modalCaption.textContent = data.name;
    this._modalImage.src = data.link;
    this._modalImage.setAttribute("alt", data.name);
  }

  close() {
    super.close();
    this._modalCaption.textContent = "";
    this._modalImage.src = "";
    this._modalImage.setAttribute("alt", "");
  }
}
