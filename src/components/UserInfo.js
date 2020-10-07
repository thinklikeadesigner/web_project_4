import PopupWithForm from "./PopupWithForm.js";

class UserInfo {
  constructor({ inputName, inputJob }) {
    this._inputName = document.querySelector(inputName).value;
    this._inputJob = document.querySelector(inputJob).value;
    this._profileName = document.querySelector(".profile__name");
    this._profileJob = document.querySelector(".profile__job");
  }

  getUserInfo() {
    this._currentUserInfoValues = {
      inputName: this._inputName,
      inputJob: this._inputJob,
    };
    return this._currentUserInfoValues;
  }

  setUserInfo() {
    this._profileName.textContent = this._currentUserInfoValues.inputName;
    this._profileJob.textContent = this._currentUserInfoValues.inputJob;
  }
}

export { UserInfo };
