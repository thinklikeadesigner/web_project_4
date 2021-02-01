import PopupWithForm from "./PopupWithForm.js";

class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector,
    userAvatarSelector,
  }) {
    this._userNameElement = userNameSelector;
    this._userDescriptionElement = userDescriptionSelector;

    this._userAvatarElement = userAvatarSelector;
  }

  setUserInfo({ userName, userDescription, userAvatar }) {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
    this._userAvatarElement.src = userAvatar;
  }
}

export { UserInfo };
