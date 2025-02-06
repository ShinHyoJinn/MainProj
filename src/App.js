import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultLastPage from './pages/ResultLastPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage'
import TemporaryCarePage from './pages/TemporaryCarePage'

import TemporaryCare_RePage from './pages/TemporaryCare_RePage'
import Temporary_choicePage from './pages/Temporary_choicePage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/ResultLastPage" element={<ResultLastPage/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/TemporaryCarePage" element={<TemporaryCarePage/>} />

        <Route path="/TemporaryCare_RePage" element={<TemporaryCare_RePage/>} />
        <Route path="/Temporary_choicePage" element={<Temporary_choicePage/>} />

      </Routes>
    
  );
}

export default App;
