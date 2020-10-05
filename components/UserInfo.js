// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.

import PopupWithForm from './PopupWithForm.js';

class UserInfo {
    constructor({inputName, inputJob}) {
        this._inputName = document.querySelector(inputName).value;
        this._inputJob = document.querySelector(inputJob).value;
        this._profileName = document.querySelector(".profile__name");
        this._profileJob = document.querySelector(".profile__job");
        
    }

   // Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
   
   getUserInfo() {

     this._currentUserInfoValues = {inputName: this._inputName, inputJob: this._inputJob};
return this._currentUserInfoValues;
   }

   // Store a public method named setUserInfo(), which takes new user data and adds it on the page.
   setUserInfo() {
       
       this._profileName.textContent = this._currentUserInfoValues.inputName;
       this._profileJob.textContent = this._currentUserInfoValues.inputJob;
   }


}
// const newName = infoArr.inputName;
// const newJob = infoArr.inputJob;
// console.log(infoArr);







//   editButton.addEventListener("click", () => {
//     if (!editModalWindow.classList.contains("modal_open")) {
//       inputName.value = profileName.textContent;
//       inputJob.value = profileJob.textContent;
//     }

//   });

export {UserInfo};