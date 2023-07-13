class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileJob = document.querySelector(configInfo.profileJobSelector);
    this._profileAvatar = document.querySelector(configInfo.profileAvatar);
  }

  getUserInfo() {
    return {firstname: this._profileName.textContent, job: this._profileJob.textContent};
  }

  setUserInfo({firstname, job, avatar}) {
    this._profileAvatar.src = avatar;
    this._profileName.textContent = firstname;
    this._profileJob.textContent = job;
  }
}

export {UserInfo};