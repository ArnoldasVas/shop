import React from 'react';
import './card.scss';

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Add to card</button>
    </div>
  );
}

export default Card;
