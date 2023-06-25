class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileJob = document.querySelector(configInfo.profileJobSelector);
  }

  getUserInfo() {
    return {firstname: this._profileName.textContent, job: this._profileJob.textContent};
  }

  setUserInfo(dataUser) {
    this._profileName.textContent = dataUser.firstname;
    this._profileJob.textContent = dataUser.job;
  }
}

export {UserInfo};