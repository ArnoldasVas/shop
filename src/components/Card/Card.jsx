import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };

  return (
    <div className="item">
      <FontAwesomeIcon
        icon={faHeart}
        className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
        onClick={() => {
          isFavorite
            ? handleRemoveFromFavorites({ title, description })
            : handleAddToFavorites({ title, description });
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'remove from cart' : 'add to cart'}
      </button>
    </div>
  );
}

export default Card;
