

import PopupWithForm from "./PopupWithForm.js";

class UserInfo {
  constructor( {userNameSelector, userDescriptionSelector, userAvatarSelector} ) {
    this._userNameElement = document.querySelector(
      userNameSelector
    );
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
    this._userAvatarElement = document.querySelector(userAvatarSelector)
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
      userAvatar: this._userAvatarElement.src,
      userID: this._id
    };
  }

  setUserInfo({userName, userDescription, userAvatar}) {

    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
    this._userAvatarElement.src = userAvatar;
  }
}

export { UserInfo };
