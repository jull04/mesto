import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__content');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputValue());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValue() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    }) 
    return this._values;
  }
 
  setInputValue(dataUser) {
    this._inputList.forEach(input => {
      input.value = dataUser[input.name];
    })
  }
}

export {PopupWithForm};