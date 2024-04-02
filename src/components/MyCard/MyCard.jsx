import React, { useContext, useState } from 'react';
import { handleSort } from '../../utils/sortUtils';
//components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

import './myCard.scss';

function MyCard() {
  const { cardData, setCardData, handleRemoveFromCard } =
    useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <main className="my-container">
      <div className="container-actions">
        <SortButtons handleSortData={handleSortData} />

        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {cardData
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map(({ title, description }) => (
          <Card
            key={title}
            title={title}
            description={description}
            handleCardButton={handleRemoveFromCard}
            card={true}
          />
        ))}
    </main>
  );
}

export default MyCard;
