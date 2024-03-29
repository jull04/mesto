import { Popup } from "./Popup.js";

class PopupDeleteCard extends Popup {
  constructor(popupSelector, sumbitFunction) {
    super(popupSelector);
    this._sumbitFunction = sumbitFunction;
    this._form = this._popup.querySelector('.popup__content'); 
    this._submitButton = this._form.querySelector('.popup__submit');
}

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._sumbitFunction({card: this._card, cardId: this._cardId});
    });
  }

  setDefaultText() {
    this._submitButton.textContent = this._defaultText;
  }

  open = ({ card, cardId }) => {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }
}; 

export { PopupDeleteCard };