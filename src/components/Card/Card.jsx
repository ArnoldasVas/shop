import React from 'react';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description });
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
