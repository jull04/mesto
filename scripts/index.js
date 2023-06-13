import { initialCards } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formEditProfile = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');


const formEditProfilee = document.forms['edit-form'];
const formAddCard = document.forms['add-form'];

//переменная с объектом валидации
const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//экземпляры класса для разных форм
const formProfileValidator = new FormValidator(validationConfig, formEditProfilee);
formProfileValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAddCard);
formAddValidator.enableValidation();

const handlePopupClose = (evt) => {
  const overlay = evt.target.classList.contains('popup');
  const closeBtn = evt.target.classList.contains('popup__close');
    if (overlay || closeBtn) {
      closePopup(evt.target);
    };
};

const closePressTheEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup__visible');
  closePopup(openedPopup); 
  };
};
    
// общие функци для закрытия и открытия попапов
function openPopup(popup) {
  popup.classList.add('popup__visible');
  document.addEventListener('click', handlePopupClose);
  document.addEventListener('keydown', closePressTheEsc);
};
  
function closePopup(popup) {
  popup.classList.remove('popup__visible');
  document.removeEventListener('click', handlePopupClose);
  document.removeEventListener('keydown', closePressTheEsc);
};

const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_job");


// закрытие и открытие попапа редактирования 
const openPopupEdit = () => {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formProfileValidator.resetError();
};

const closePopupEdit = () => {
  closePopup(popupEdit);
};

// закрытие и открытие попапа добавления
const openPopupAdd = () => {
  openPopup(popupAdd);
  formAddValidator.resetError();
};

const closePopupAdd = () => { 
  closePopup(popupAdd); 
};

buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', openPopupAdd);

// submit попапа редактирования
function submitEditProfileForm (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

formEditProfile.addEventListener('submit', submitEditProfileForm); 

// добавление карточки
const formElementAdd = document.querySelector('.popup__content_add');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;

  const newCardData = {
    name,
    link,
  };

  cardsContainer.prepend(createNewCard(newCardData)); 
  closePopupAdd();
  event.target.reset();
};

formElementAdd.addEventListener('submit', handleAddFormSubmit);

// попап для фоток
const popupImage = document.querySelector(".popup_img");
const popupImageDescription = popupImage.querySelector(".popup__description");
const popupImagePhoto = popupImage.querySelector(".popup__img");

const openPopupImg = (cardData) => {
  popupImageDescription.textContent = cardData.name;
  popupImagePhoto.src = cardData.link;
  popupImagePhoto.alt = cardData.name;
  openPopup(popupImage);
};
  
const selectorTemplate = '#card-template';
const cardsContainer = document.querySelector('.cards');

function createNewCard(element) {
  const card = new Card(element, selectorTemplate, openPopupImg); 
  const cardElement = card.createCard();
  return cardElement;
};

// загрузка начальных карточек
initialCards.forEach(element => {
  cardsContainer.prepend(createNewCard(element));
});