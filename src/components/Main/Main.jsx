import React, { useContext, useState } from 'react';
import { handleSort } from '../../utils/sortUtils';
//components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

import './main.scss';

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="container">
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
      {data
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
            handleCardButton={handleAddToCard}
          />
        ))}
      ;
    </main>
  );
}

export default Main;
