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
        const overlay = evt.target.classList.contains('popup');
        const closeBtn = evt.target.classList.contains('popup__close');
        if (overlay || closeBtn) {
        this.close();
    }
    }

    setEventListeners() {
      this._popupCloseButton.addEventListener('click', this._handleCLoseButton);
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

export {Popup};
