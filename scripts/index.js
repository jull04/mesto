const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup__visible');
}

function closePopup() {
    popup.classList.remove('popup__visible');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileName.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 