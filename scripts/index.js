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

function openPopupadd() {
    add.classList.add('popup__visible');
}

buttonAdd.addEventListener('click', openPopupadd);

function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
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

initialCards.push();

const cardTemplate = document.getElementById('card-template');
const cardContainer = document.querySelector('.cards');

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.cards__item').cloneNode(true);

  const cardImage = cardElement.querySelector('.cards__image');
  const cardTitle =  cardElement.querySelector('.cards__title');
  const cardDeleteButton = cardElement.querySelector('.cards__trash');
  const cardLikeButton = cardElement.querySelector('.cards__like');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = (evt) => {
    cardLikeButton.classList.toggle('cards__like_active');
  };

  cardDeleteButton.addEventListener('click', handleDelete);
  cardLikeButton.addEventListener('click', handleLike);

  return cardElement;
};

initialCards.forEach((card) => {
  const element = createCardElement(card);
  cardContainer.appendChild(element);
})

// форма добавления картинок

const formElementAdd = document.querySelector('.popup__content_add');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');
const titleCard = document.querySelector('.cards__title');
const linkCard = document.querySelector('.cards__image');

const handleFormSave = (evt) => {
    evt.preventDefault(); 
    const title = titleInput.value;
    const link = linkInput.value;
   
    const initialCards = {
        title,
        link,
    };

    renerAddElement(createCardElement(initialCards));
    closePopup();
}

formElementAdd.addEventListener('submit', handleFormSave);
