export default class Card {
  constructor({ name, link, handleCardClick }, cardSelector) {
    this._title = name;
    this._url = link;
    this.cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card__template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeIcon() {
    this._cardLikeBtn.classList.toggle("card__heart_active");
  }

  _handleDeleteBtn() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () => this._handleLikeIcon());
    this._deleteBtn.addEventListener("click", () => this._handleDeleteBtn());
    this._cardPic.addEventListener("click", () => this._handleCardClick());
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
    this._cardLikeBtn = this._element.querySelector(".card__heart");

    this._setEventListeners();
    this._setElements();

    return this._element;
  }
}
