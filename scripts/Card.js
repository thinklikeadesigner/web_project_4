// Transforming the Card Class
// Connect the Card class to the popup. Make Card take the handleCardClick() function into the constructor. When the user clicks on the card, this function will open the popup with an image. 



import { handleModalOpen } from "./utils.js";
class Card {
  constructor(title, url, cardSelector) {
    this._title = title;
    this._url = url;
    this.cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card__template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__heart")
      .addEventListener("click", (evt) =>
        evt.target.classList.toggle("card__heart_active")
      );
    this._deleteBtn.addEventListener("click", () => {
      this._element.remove();
    });
    this._cardPic.addEventListener("click", () => {
      handleModalOpen(this._title, this._url);
    });
  }

  _setElements() {
    this._cardPic.src = this._url;
    this._cardPic.setAttribute("alt", this._title);
    this._cardTitle.textContent = this._title;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector(".card__pic");
    this._cardTitle = this._element.querySelector(".card__title");
    this._deleteBtn = this._element.querySelector(".card__delete-btn");

    this._setEventListeners();
    this._setElements();

    return this._element;
  }
}

export default Card;
