import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteClick, handleCardLike },
    userID,
    cardSelector
  ) {
    this._title = data.name;
    this._url = data.link;
    this._data = data;
    this._owner = data.owner;
    this._userID = userID;
    this._likes = data.likes;
    this._cardTemplate = document
      .querySelector("#card__template")
      .content.querySelector(".card");
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
    this.cardSelector = cardSelector;
    this._card = this._cardTemplate.cloneNode(true);
    this.heart = this._card.querySelector(".card__heart");
  }

  id() {
    return this._data._id;
  }

  returnLikes() {
    return this._likes;
  }

  _showMyLikes() {
    this._likes.forEach((like) => {
      if (like._id == this._userID) {
        this.heart.classList.add("card__heart_active");
      }
    });
  }

  returnCards() {
    return this._data;
  }

  _showMyDeletes() {
    if (this._owner._id == this._userID) {
      this._deleteBtn.classList.add("card_show-delete-btn");
    }
  }

  displayLikeCount(numberOfLikes) {
    this._card.querySelector(".card__likes_count").textContent = numberOfLikes;
  }

  showDeleteButton() {
    this._deleteBtn.classList.add("card_show-delete-btn");
  }

  hideDeleteButton() {
    this._deleteBtn.classList.remove("card_show-delete-btn");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this.heart.addEventListener("click", () => {
      this._handleCardLike(this.id());
    });

    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteClick(this.id());
    });

    this._cardPic.addEventListener("click", () => this._handleCardClick());
    this._showMyLikes();
    this._showMyDeletes();
  }

  _setElements() {
    this._cardPic.src = this._url;
    this._cardPic.setAttribute("alt", this._title);
    this._cardTitle.textContent = this._title;
  }

  generateCard() {
    this._element = this._card;
    this._cardPic = this._card.querySelector(".card__pic");
    this._cardTitle = this._card.querySelector(".card__title");
    this._deleteBtn = this._card.querySelector(".card__delete-btn");
    this._cardCount = this._card.querySelector(".card__likes_count");

    this._setEventListeners();
    this._setElements();

    return this._card;
  }
}
