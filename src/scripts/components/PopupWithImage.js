import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__img');
        this._popupImageCaption = this._popup.querySelector('.popup__description');
    }
  

    open = (cardData) => {
      this._popupImage.src =  cardData.link;
      this._popupImage.alt =  cardData.title;
      this._popupImageCaption.textContent = cardData.title;
      super.open();
}
}

export {PopupWithImage};