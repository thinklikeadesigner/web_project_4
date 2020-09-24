const { default: Popup } = require("./Popup");

import Popup from "./Popup";


class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }

    open(link, caption) {
        this._popupElement.querySelector(".modal__img").src = link;
        this._popupElement.querySelector(".modal__img").textContent = caption;
    }
}

export default PopupWithImage;