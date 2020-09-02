const items = [
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail.jpg",
    title: "BIOLOID",
    description:
      "Robot Kit is a popular series of robot construction kits from the company Robotis. The series includes various sets designed both for beginners and for advanced users. In this kit, you'll find everything you need to build unique types of robots and make your own custom designs. The set comes with a software tool for programming, a remote controller, servo motors, and much more.",
    price: "$999",
  },
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail.jpg",
    title: "BIOLOID Premium kit",
    description:
      "BIOLOID Premium Kit has everything needed to build bipedal robots and includes Dynamixel Smart Servo Motor and the CM-530 controller. BIOLOID Premium Kit is perfect for education, entertainment, and robotics competitions.",
    price: "$1800",
  },
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail2.png",
    title: "Airwheel",
    description:
      "This bicycle model allows you to use both the pedal and the electric motor, or a combination of both. Airwheel R8 is equipped with a removable battery set to ensure sufficient power supply and to make your trips longer.",
    price: "$2000",
  },
];

const cardList = document.querySelector(".card-list__items");
const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const defaultCardButton = document.querySelector(".filter__button_type_grid");
const horizontalCardButton = document.querySelector(
  ".filter__button_type_column"
);

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add("popup_is-opened");
  }

  _handleClosePopup() {
    popupImage.src = "";
    popupElement.classList.remove("popup_is-opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }
  _handleOpenPopup() {
    popupCaption.textContent = this._description;
    super._handleOpenPopup();
  }
  _handleClosePopup() {
    popupCaption.textContent = "";
    super._handleClosePopup();
  }
  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}

class HorizontalCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__info").textContent = this._description;
    this._element.querySelector(
      ".card__price-property"
    ).textContent = this._price;

    return this._element;
  }
}

const renderElements = (isGrid) => {
  cardList.innerHTML = "";
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, ".default-card")
      : new HorizontalCard(item, ".horizontal-card");

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};

defaultCardButton.addEventListener("click", () => {
  renderElements(true);
});

horizontalCardButton.addEventListener("click", () => {
  renderElements(false);
});

renderElements();
