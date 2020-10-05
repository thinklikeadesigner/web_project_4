import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._modalCaption = document.querySelector('.modal__caption');
        this._modalImage = document.querySelector('.modal__img');
    }
open(name, link) {
    super.open(name, link);
    this._modalCaption.textContent = name;
    this._modalImage.src = link;
    this._modalImage.setAttribute("alt", name);
}

close() {
    super.close()
    this._modalCaption.textContent = "";
    this._modalImage.src = "";
    this._modalImage.setAttribute("alt", "");
}
}
