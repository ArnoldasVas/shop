import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorites from './components/Favorites/Favorites';
import Admin from './components/Admin/Admin';

import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="my-card" element={<MyCard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
