import { Popup } from "./Popup.js";

class PopupDeleteCard extends Popup {
  constructor(popupSelector, sumbitFunction) {
    super(popupSelector);
    this._sumbitFunction = sumbitFunction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._sumbitFunction({card: this._card, cardId: this._cardId});
    });
  }

  open = ({ card, cardId }) => {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  close() {
    super.close();
  }
}; 

export { PopupDeleteCard };