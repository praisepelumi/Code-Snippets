import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './src/pages/MainPage.jsx';
import SignupPage from './src/pages/SignupPage.jsx';
import LoginPage from './src/pages/LoginPage.jsx';

const App = () => (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
);

export default App;
