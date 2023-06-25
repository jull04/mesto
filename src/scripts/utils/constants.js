const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formEditProfilee = document.forms['edit-form'];
const formAddCard = document.forms['add-form'];

const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const configInfo = {
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle'
};

const selectorTemplate = '#card-template';
const popupProfileSelector = '.popup_edit';
const popupImageSelector = '#popup-img';
const listsElementSelector = '.cards';
const popupAddCardSelector = '.popup_add';


export {initialCards,
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
};