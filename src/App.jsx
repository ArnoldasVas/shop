import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorite from './components/Favorite/Favorite';

import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="my-card" element={<MyCard />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
