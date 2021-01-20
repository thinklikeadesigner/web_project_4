// deleteCardOpenButton.addEventListener('click', () => {
//     openDeleteCard();
//   })

//   export const deleteCardPopup = new PopupWithForm({
//     popupSelector: deleteCardModalWindow
//   });

//   function openDeleteCard() {
//     deleteCardPopup.open();
//     }
    

//     function handleDeleteClick(cardID) {
//         deleteCardPopup.open(cardID);
//             deleteCardPopup.submitData(() => {
//               deleteCardSubmitButton.textContent = "Deleting...";
//               api.removeCard(cardID)
//               .then(() => {
//                 this.handleDeleteCard(cardID);
//                 deleteCardPopup.close();
//                 deleteCardSubmitButton.textContent = "Yes";
//               })
//               .catch(error => console.log(error))
//             })
//       }



// card.js

//       handleDeleteCard() {
//         this._card.remove();
//         this._card = null;
//       };


//       in addEventListener
//       const cardDeleteButton = this._card.querySelector('.card__delete');

//       cardDeleteButton.addEventListener('click', () => {
//         this._handleDeleteClick(this.id(), this._card)
//       });

//       if (this._owner._id !== this._userID) {
//         cardDeleteButton.style.display = 'none';
//       }