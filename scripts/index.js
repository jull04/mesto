const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');
const buttonCloseadd = document.querySelector('.popup__close_add');
const popupEdit = document.querySelector('.popup_edit');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popup = document.querySelector('.popup');



// общие функци для закрытия и открытия попапов

function openPopup(popup) {
    popup.classList.add('popup__visible');
}
  
function closePopup(popup) {
    popup.classList.remove('popup__visible');
}


// закрытие и открытие попапа редактирования 

const openPopupEdit = () => {
    openPopup(popupEdit);
}

const closePopupEdit = () => {
    closePopup(popupEdit);
}

// закрытие и открытие попапа добпвления

const openPopupAdd = () => {
    openPopup(popupAdd);
}

const closePopupAdd = () => { 
    closePopup(popupAdd); 
}  

buttonEdit.addEventListener('click', () => openPopup(popupEdit));
buttonClose.addEventListener('click', () => closePopup(popupEdit));
buttonCloseadd.addEventListener('click', () => closePopup(popupAdd));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));


// submit попапа редактирования


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

formElement.addEventListener('submit', handleFormSubmit); 




// массив фоток

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


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
const buttonCloseAdd = document.querySelector('.popup__close_add');


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





