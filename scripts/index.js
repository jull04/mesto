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