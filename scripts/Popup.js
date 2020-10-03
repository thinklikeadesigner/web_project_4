// Creating the Popup Class
// Create the Popup class that opens and closes the popup window, as per the following requirements:
// The constructor has a single parameter, which is the popup selector.
// It stores the public methods open() and close() that will open and close the popup.
// It stores a private method named _handleEscClose() that stores the logic for closing the popup by pressing the Esc key.
// It stores a public method named setEventListeners() that adds a click event listener to the close icon of the popup.

export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
open() {
    this._popupElement.classList.add("modal_open");
    document.addEventListener("keydown", this._handleEscClose);
}

close() {
    this._popupElement.classList.remove('modal_open');
    document.removeEventListener("keydown", this._handleEscClose);
}

_handleEscClose(evt) {
    if (evt.which == 27) {
        this.close();
    }
}

setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("modal__close-button"))
        this.close();
    })
}

}