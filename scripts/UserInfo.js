class UserInfo {
    constructor(name, job) {
        this._name = document.querySelector(name).textContent;
        this._job = document.querySelector(job).textContent;
    }


   
   getUserInfo() {
       this._currentUserInfo = {name: this._name, job: this._job};
return this._currentUserInfo;
   }


//    setUserInfo() {
//        this._name = name;
//        this._job = job;
//    }


}


export default UserInfo;