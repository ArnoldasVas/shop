import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mockData } from './mockData';
//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorite from './components/Favorite/Favorite';

import './App.scss';

function App() {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredCardData);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main data={data} setData={setData} setCardData={handleAddToCard} />
          }
        />
        <Route
          path="my-card"
          element={
            <MyCard cardData={cardData} setCardData={handleRemoveFromCard} />
          }
        />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
