import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './src/pages/MainPage.jsx';
import SignupPage from './src/pages/SignupPage.jsx';
import LoginPage from './src/pages/LoginPage.jsx';
import MainContainer from './src/containers/MainContainer/MainContainer.jsx';

const App = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    {/* <Route path='/' element={<MainContainer />} /> */}
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
);

export default App;
