import './index.css';

import {initialCards,
  buttonEdit, 
  buttonAdd, 
  formEditProfilee, 
  formAddCard,
  profileAvatarOverlay,
  popupAvatarSelector,
  popupDeleteSelector,
  formAvatar,
  validationConfig,
  configInfo,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  listsElementSelector,
  popupAddCardSelector,
} from "../scripts/utils/constants.js";

import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupDeleteCard } from "../scripts/components/PopupDeleteCard.js";
import { Api } from '../scripts/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
    authorization: 'aa4e4177-7d9a-46f6-84e8-d329937ea67d',
    'Content-Type': 'application/json'
  }
}); 

const formProfileValidator = new FormValidator(validationConfig, formEditProfilee);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

const formAvatarValidator = new FormValidator(validationConfig, formAvatar);
formAvatarValidator.enableValidation();

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const deletePopupCard = new PopupDeleteCard (popupDeleteSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard()
      deletePopupCard.close()
    })
    .catch((error => console.error(`Ошибка удаления карточки ${error}`)))
    .finally(() => deletePopupCard.setDefaultText());
})

function createNewCard (element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deletePopupCard.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('cards__like_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.toggleLike(res.likes)
      })
      .catch((error => console.error(`Ошибка снятия лайка ${error}`)))
    } else {
      api.putLike(cardId)
        .then(res =>{
          card.toggleLike(res.likes)
        })
        .catch((error => console.error(`Ошибка добавления лайка ${error}`)))
    }
  }); 
  return card.createCard();
}

const section = new Section((element) => {
  section.addItemAppend(createNewCard(element));
}, listsElementSelector);

const userInfo = new UserInfo (configInfo);

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({
        firstname: res.name, 
        job: res.about, 
        avatar: res.avatar
      })
    })
    .catch((error => console.error(`Ошибка редактирования профиля ${error}`)))
    .finally(() => popupProfile.setDefaultText())
});

const popupAddCard = new PopupWithForm(popupAddCardSelector , (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
  .then(([dataUser, dataCard]) => {
    dataCard.myid = dataUser._id;
    section.addItemPrepend(createNewCard(dataCard))
    popupAddCard.close()
  })
  .catch((error => console.error(`Ошибка создания карточки ${error}`)))
  .finally(() => popupAddCard.setDefaultText())
});

const popupAvatar = new PopupWithForm(popupAvatarSelector , (data) => {
  api.setAvatar(data)
    .then(res => {
      userInfo.setUserInfo({
        firstname: res.name, 
        job: res.about, 
        avatar: res.avatar
      })
    })
    .catch((error => console.error(`Ошибка обновления аватара ${error}`)))
    .finally(() => popupAvatar.setDefaultText())
  popupAvatar.close();
});

deletePopupCard.setEventListeners();
popupAvatar.setEventListeners();
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

profileAvatarOverlay.addEventListener('click', () => {
  formAvatarValidator.resetError();
  popupAvatar.open();
})

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myId = dataUser._id);
    userInfo.setUserInfo({
      firstname: dataUser.name, 
      job: dataUser.about, 
      avatar: dataUser.avatar
    })
    section.addArrayCard(dataCard);
  })
  .catch((error => console.error(`Ошибка ${error}`)))