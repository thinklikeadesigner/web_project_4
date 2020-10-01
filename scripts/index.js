import Card from "./Card.js";
import Section from "./Section.js";
import {initialCards} from './constants.js';


const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({item, handleCardClick: () => console.log("hi")},   "#card__template");

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
    },
  },
  '.cards__list'
);

cardsList.renderItems();

// initialCards.forEach((data) => {
//   const card = new Card(data.name, data.link, "#card__template");
//   const cardElement = card.generateCard();
//   list.prepend(cardElement);
// });