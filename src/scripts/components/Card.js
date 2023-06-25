class Card {
    constructor (cardData, selectorTemplate, openPopupImg) {
      this._cardData = cardData;
      this._link = cardData.link;
      this._name = cardData.title;
      this._openPopupImg = openPopupImg;
      this._selectorTemplate = selectorTemplate;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._selectorTemplate)
        .content
        .querySelector('.cards__item')
        .cloneNode(true);
  
        return cardElement;
    }
    
    _handleDelete = () => {
      this._cloneElement.remove();
    }
  
    _handleLike = () => {
      this._cardLikeButton.classList.toggle("cards__like_active");
    }
  
    _openImage = () => {
      this._openPopupImg(this._cardData);
    }
  
    _setEvenListener () {
      this._cardDeleteButton.addEventListener('click', this._handleDelete);
      this._cardLikeButton.addEventListener('click', this._handleLike)
      this._cardImage.addEventListener('click', this._openImage)
    }
  
    createCard() {
      this._cloneElement = this._getTemplate();
      this._cardImage = this._cloneElement.querySelector('.cards__image');
      this._cardTitle = this._cloneElement.querySelector('.cards__title');
      this._cardDeleteButton = this._cloneElement.querySelector('.cards__trash');
      this._cardLikeButton = this._cloneElement.querySelector('.cards__like');
  
      this._cardTitle.textContent = this._name;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
    
      this._setEvenListener();
  
      return this._cloneElement;
    }
}

export {Card}