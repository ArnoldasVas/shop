import React from 'react';
import './favorite.scss';

function Card({ title, description, setCardData, card }) {
  const handleAddToCard = () => {
    setCardData({ title, description });
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'remove from cart' : 'add to cart'}
      </button>
    </div>
  );
}

export default Card;
