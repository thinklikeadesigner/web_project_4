// import PopupWithForm from "./PopupWithForm.js";

// class UserInfo {
//   constructor({ inputName, inputJob }) {
//     this._inputName = document.querySelector(inputName).value;
//     this._inputJob = document.querySelector(inputJob).value;
//     this._profileName = document.querySelector(profileConfig.profileTitle);
//     this._profileJob = document.querySelector(profileConfig.profileDescription);
//   }

//   getUserInfo() {
//     this._currentUserInfoValues = {
//       inputName: this._inputName,
//       inputJob: this._inputJob,
//     };
//     return this._currentUserInfoValues;
//   }

//   setUserInfo() {
//     this._profileName.textContent = this._currentUserInfoValues.inputName;
//     this._profileJob.textContent = this._currentUserInfoValues.inputJob;
//   }
// }

// export { UserInfo };

import PopupWithForm from "./PopupWithForm.js";

class UserInfo {
  constructor( userNameSelector, userDescriptionSelector ) {
    this._userNameElement = document.querySelector(`${userNameSelector}`);
    this._userDescriptionElement = document.querySelector(
      `${userDescriptionSelector}`
    );
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
    };
  }

  setUserInfo({ userName, userDescription }) {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
  }
}

export { UserInfo };
