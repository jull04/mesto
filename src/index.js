import './pages/index.css';

import {initialCards,
  buttonEdit, 
  buttonAdd, 
  formEditProfilee, 
  formAddCard,
  validationConfig,
  configInfo,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  listsElementSelector,
  popupAddCardSelector,
} from "./scripts/utils/constants.js";

import { Card } from "./scripts/components/Card.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { Section } from "./scripts/components/Section.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";

const formProfileValidator = new FormValidator(validationConfig, formEditProfilee);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const section = new Section ({
  items: initialCards, 
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open); 
    return card.createCard(); 
  }
}, listsElementSelector);

section.addArrayCard();

const userInfo = new UserInfo (configInfo);

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValue());
  popupProfile.close();
});

const popupAddCard = new PopupWithForm(popupAddCardSelector , (evt) => {
    evt.preventDefault();
    section.addItem(section.renderer(popupAddCard.getInputValue()));
    popupAddCard.close();
});

popupProfile.setEventListeners();
popupAddCard.setEventListeners();

buttonEdit.addEventListener('click', () => {
  popupProfile.open();
  formProfileValidator.resetError();
  popupProfile.setInputValue(userInfo.getUserInfo());
});

buttonAdd.addEventListener('click', () => {
  popupAddCard.open();
  formAddValidator.resetError();
});

