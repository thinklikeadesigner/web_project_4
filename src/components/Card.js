export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteClick, handleCardLike }, userID,
    cardSelector
  ) {
    this._title = data.name;
    this._url = data.link;
    this._likes = data.likes;
    this.cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;
    this._cardTemplate = document.querySelector("#card__template").content.querySelector(".card")
    this._id = data._id;
    this._ownerID = data.owner;
this._card = this._cardTemplate.cloneNode(true);
    this._data = data;
    this._id = data._id;
    this._userID = userID;
    this._owner = data.owner;
    this.heart = this._card.querySelector(".card__heart");
  }

  returnID() {
    return this._id;
  }

  returnLikes() {

    return this._likes;
  }

  _showMyLikes() {
    if (this._likes.some((like) => like._id === this._userID)) {
      this._card.querySelector(".card__heart").classList.add("card__heart_active");
    }
  }

  displayLikeCount(numberOfLikes) {
    this._card.querySelector(".card__likes_count").textContent = numberOfLikes;
  }


  showDeleteButton() {
    this._deleteBtn.classList.add("card_show-delete-btn");
  }

  hideDeleteButton() {
    this._deleteBtn.classList.add("card_show-hide-btn");
  }

  _handleLikeIcon() {
    this._cardCount.textContent = 90;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () => {

      this._handleCardLike(this.returnID());
    
    });
    this._deleteBtn.addEventListener("click", () => {
      this._element.remove();
      this._element = null;
      this._handleDeleteClick(this.returnID());
    });
    this._cardPic.addEventListener("click", () => this._handleCardClick());
    this._showMyLikes();
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
    this._cardLikeBtn = this._card.querySelector(".card__heart");
    this._cardCount = this._card.querySelector(".card__likes_count");

    this._setEventListeners();
    this._setElements();

    return this._card;
  }
}
