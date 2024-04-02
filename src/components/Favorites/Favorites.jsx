import React, { useContext, useState } from 'react';
import { handleSort } from '../../utils/sortUtils';
//components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

import './favorites.scss';

function Favorites() {
  const { favoritesData, setFavoritesData } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
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

      {favoritesData
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            handleCardButton={() => {}}
          />
        ))}
    </main>
  );
}

export default Favorites;
