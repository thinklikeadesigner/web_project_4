// Creating the UserInfo Class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.

class UserInfo {
    constructor({name, job}) {
        this._name = document.querySelector(name).textContent;
        this._job = document.querySelector(job).textContent;
    }

   // Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
   
   getUserInfo() {
       this._currentUserInfo = {name: this._name, job: this._job};
return this._currentUserInfo;
   }

   // Store a public method named setUserInfo(), which takes new user data and adds it on the page.
   setUserInfo({inputName, inputJob}) {
       this._name = inputName;
       this._job = inputJob;
   }


}





//   editButton.addEventListener("click", () => {
//     if (!editModalWindow.classList.contains("modal_open")) {
//       inputName.value = profileName.textContent;
//       inputJob.value = profileJob.textContent;
//     }

//   });

export {UserInfo};