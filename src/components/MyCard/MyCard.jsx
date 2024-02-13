import React from 'react';
import Card from '../Card/Card';

function MyCard({ cardData, setCardData }) {
  return (
    <main className="container">
      {cardData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          setCardData={setCardData}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
