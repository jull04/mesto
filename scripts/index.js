const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');


function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 