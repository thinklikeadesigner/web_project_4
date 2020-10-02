// Creating the PopupWithImage Class
// Create the PopupWithImage class as a child class of Popup. This class has to change the parent open() method. In the open() method of the PopupWithImage class, you need to add an image to the popup and the corresponding image src attribute along with a caption for the image.



import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
open(name, link) {
    super.open(name, link);
    document.querySelector('.modal__caption').textContent = name;
    document.querySelector('.modal__img').src = link;
   

}



}