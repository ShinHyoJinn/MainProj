import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultLastPage from './pages/ResultLastPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/ResultLastPage" element={<ResultLastPage/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />

      </Routes>
    
  );
}

export default App;
