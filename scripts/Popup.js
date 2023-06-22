class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close');
    }
    
    _handleCLoseButton = () => {
      this.close();
    }

    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }

    _handleCLickByOverlay = (evt) => {
      if(evt.target === evt.currentTarget) {
        this.close();
      }
    }

    setEventListeners() {
      this._popupCloseButton.setEventListener('click', this._handleCLoseButton);
      this._popup.addEventListener('click', this._handleCLickByOverlay); 
    }

    open() {
      this._popup.classList.add('popup__visible');
      document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
      this._popup.classList.remove('popup__visible');
      document.removeEventListener('keydown', this._handleEscClose);
    }
}

export {Popup}
