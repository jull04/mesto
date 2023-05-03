const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');
const buttonCloseadd = document.querySelector('.popup__close_add');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const buttonAdd = document.querySelector('.profile__add-button');
const add = document.querySelector('.popup_add');


// закрытие открытие попапов

function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}

function openPopupadd() {
    add.classList.add('popup__visible');
}

function closePopupadd() {
    add.classList.remove('popup__visible');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}


buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
buttonCloseadd.addEventListener('click', closePopupadd);
formElement.addEventListener('submit', handleFormSubmit); 
buttonAdd.addEventListener('click', openPopupadd);




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
const cardContainer = document.querySelector('.cards');

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

  const handleLike = (evt) => {
    cardLikeButton.classList.toggle('cards__like_active');
  };

  cardDeleteButton.addEventListener('click', handleDelete);
  cardLikeButton.addEventListener('click', handleLike);


  // открытие фотки

  function openPopupIm() {
      popupImages.classList.add('popup__visible');
  }
  
  cardImage.addEventListener('click', openPopupIm);


  const openPopupImg = () => {
    popupDescription.textContent = cardData.name;
    popupPhoto.src = cardData.link;
    openPopupIm();
  }

  cardImage.addEventListener('click', openPopupImg);



  return cardsElement;
};

const renderAddElement = (cardsElement) => {
    cardContainer.prepend(cardsElement);
};

initialCards.forEach((initialCards) => {
  const element = createCardElement(initialCards);
  renderAddElement(element);
});


 
// добавление карточки

const formElementAdd = document.querySelector('.popup__content_add');
const formAdd = document.querySelector('.popup_add');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');
const buttonCloseAdd = document.querySelector('.popup__close_add');


function closePopupAdd() {
    formAdd.classList.remove('popup__visible');
}

buttonCloseAdd.addEventListener('click', closePopup);

const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const name = titleInput.value;
    const link = linkInput.value;

    const initialCards = {
        name,
        link,
    };
    renderAddElement(createCardElement(initialCards)); 
    closePopupAdd();
    event.target.reset(event);
    
};


formElementAdd.addEventListener('submit', handleAddFormSubmit);


// попап для фоток


const popupImages = document.querySelector(".popup_img");
const popupDescription = document.querySelector(".popup__description");
const popupImgForm = document.querySelector(".popup__content_img");
const popupPhoto = document.querySelector(".popup__img");

// открытие фотки

const cardImage = document.querySelector('.cards__image');

function openPopupImg() {
    popupImages.classList.add('popup__visible');
}

cardImage.addEventListener('click', openPopupImg);

// закрытие фотки 

const popupImgClose = document.querySelector(".popup__close_img");

function closePopupImg() {
    popupImages.classList.remove('popup__visible');
}

popupImgClose.addEventListener('click', closePopupImg);




const handleImgClick = (cardData) => {
    cardData.preventDefault();
    cardData.name = popupDescription.textContent;
    cardData.link = popupPhoto.src;
};


popupImages.addEventListener("click", handleImgClick);


