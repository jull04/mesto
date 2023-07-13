class Card {
    constructor (cardData, selectorTemplate, openPopupImg, openDeletePopup, changeLike) {
      this._cardData = cardData;
      this._myId = cardData.myId;
      this._link = cardData.link;
      this._name = cardData.name;
      this._likes = cardData.likes;
      this._numberOfLikes = cardData.likes.length;
      this._changeLike = changeLike;
      this._openPopupImg = openPopupImg;
      this._selectorTemplate = selectorTemplate;
      this._openDeletePopup = openDeletePopup;
      this._ownerId = cardData.owner._id;
      this._cardId = cardData._id;  
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
      this._openDeletePopup({card: this, cardId: this._cardId}) 
    }
  
    _handleLike = () => {
      this._changeLike(this._cardLikeButton, this._cardId)
    }
  
    _handleOpenImage = () => {
      this._openPopupImg(this._cardData);
    }
  
    _setEvenListener () {
      this._cardDeleteButton.addEventListener('click', this._handleDelete);
      this._cardLikeButton.addEventListener('click', this._handleLike)
      this._cardImage.addEventListener('click', this._handleOpenImage)
    }

    removeCard() {
      this._cloneElement.remove();
      this._cloneElement = null;
    }
  
    _checkLike() {
      this._likes.forEach(item => {
        if(item._id === this._myId) {
          this._cardLikeButton.classList.add("cards__like_active");
          return 
        }
      });
      this._counter.textContent = this._numberOfLikes;
    }

    toggleLike(likes) {
      this._cardLikeButton.classList.toggle("cards__like_active");
      this._counter.textContent = likes.length;
    }

    createCard() {
      this._cloneElement = this._getTemplate();
      this._cardImage = this._cloneElement.querySelector('.cards__image');
      this._cardTitle = this._cloneElement.querySelector('.cards__title');
      this._cardDeleteButton = this._cloneElement.querySelector('.cards__trash');
      this._cardLikeButton = this._cloneElement.querySelector('.cards__like');
      this._counter= this._cloneElement.querySelector('.cards__like-counter');
  
      this._cardTitle.textContent = this._name;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;

      this._checkLike();

      if (this._myId !== this._ownerId) {
        this._cardDeleteButton.remove();
      }
    
      this._setEvenListener();
  
      return this._cloneElement;
    }
}

export {Card}