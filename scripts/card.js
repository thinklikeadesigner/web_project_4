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
    this._element
      .querySelector(".card__delete-btn")
      .addEventListener("click", () => {
        const listItem = this._element
          .querySelector(".card__delete-btn")
          .closest(".card");
        listItem.remove();
      });
    this._element.querySelector(".card__pic").addEventListener("click", () => {
      handleModalOpen(this._title, this._url);
    });
  }

  _setElements() {
    this._element.querySelector(".card__pic").src = this._url;
    this._element.querySelector(".card__pic").setAttribute("alt", this._title);
    this._element.querySelector(".card__title").textContent = this._title;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setElements();

    return this._element;
  }
}

export default Card;
