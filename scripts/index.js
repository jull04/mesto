const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
const buttonCloseAdd = document.querySelector('.popup__close_add');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupList = document.querySelectorAll('.popup');


const handlePopupClose = (evt) => {
  const Overlay = evt.target.classList.contains('popup');
  const CloseBtn = evt.target.classList.contains('popup__close');
    if (Overlay || CloseBtn) {
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


// закрытие и открытие попапа редактирования 

const openPopupEdit = () => {
  openPopup(popupEdit);
};

const closePopupEdit = () => {
  closePopup(popupEdit);
};


// закрытие и открытие попапа добпвления

const openPopupAdd = () => {
  openPopup(popupAdd);
};

const closePopupAdd = () => { 
  closePopup(popupAdd); 
};


buttonEdit.addEventListener('click', () => openPopup(popupEdit));
buttonCloseEdit.addEventListener('click', () => closePopup(popupEdit));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));


// submit попапа редактирования

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

formElement.addEventListener('submit', handleFormSubmit); 



const cardTemplate = document.getElementById('card-template');
const cardsContainer = document.querySelector('.cards');

const createCardElement = (cardData) => {
  const cardsElement = cardTemplate.content.querySelector('.cards__item').cloneNode(true);

  const cardImage = cardsElement.querySelector('.cards__image');
  const cardTitle =  cardsElement.querySelector('.cards__title');
  const cardDeleteButton = cardsElement.querySelector('.cards__trash');
  const cardLikeButton = cardsElement.querySelector('.cards__like');


  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const handleDelete = () => {
    cardsElement.remove();
  };

  const handleLike = () => {
    cardLikeButton.classList.toggle('cards__like_active');
  };

  cardDeleteButton.addEventListener('click', handleDelete);
  cardLikeButton.addEventListener('click', handleLike);


  // открытие фотки

  const openPopupImg = () => {
    popupImageDescription.textContent = cardData.name;
    popupImagePhoto.src = cardData.link;
    openPopup(popupImage);
  }

  cardImage.addEventListener('click', openPopupImg);

  return cardsElement;
};

const renderAddElement = (cardsElement) => {
  cardsContainer.prepend(cardsElement);
};

initialCards.forEach((initialCards) => {
  const element = createCardElement(initialCards);
  renderAddElement(element);
});



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

  renderAddElement(createCardElement(newCardData)); 
  closePopupAdd();
  event.target.reset();
};

formElementAdd.addEventListener('submit', handleAddFormSubmit);



// попап для фоток

const popupImage = document.querySelector(".popup_img");
const popupImageDescription = document.querySelector(".popup__description");
const popupImagePhoto = document.querySelector(".popup__img");


const handleImgClick = (cardData) => {
  cardData.preventDefault();
  cardData.name = popupImageDescription.textContent;
  cardData.link = popupImagePhoto.src;
};

  
// закрытие фотки 

const popupImgClose = document.querySelector(".popup__close_img");

const closePopupImg = () => {
  closePopup(popupImage);
}

popupImgClose.addEventListener('click', () => closePopup(popupImage));