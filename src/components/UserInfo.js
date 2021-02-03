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

  getUserInfo(){
    return this._userInfo = {title: this._userNameElement.textContent, desc:this._userDescriptionElement.textContent};
}

  setUserInfo({ userName, userDescription, userAvatar }) {


if(userAvatar) {    this._userNameElement.textContent = userName;
  this._userDescriptionElement.textContent = userDescription;
  this._userAvatarElement.src = userAvatar;} else {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
  }


  }
}

export { UserInfo };

