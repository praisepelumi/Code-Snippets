import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './src/pages/MainPage.jsx';
import SignupPage from './src/pages/SignupPage.jsx';
import LoginPage from './src/pages/LoginPage.jsx';
import MainContainer from './src/containers/MainContainer/MainContainer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeColor } from './store/appSlice.js';
import styles from './darkmodebutton.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.appSlice.themeColor);

  document.querySelector('body').setAttribute('theme', themeColor);

  return (
    <>
      <div className={styles.darkModeOn}>
        <button onClick={() => dispatch(setThemeColor())}>DarkMode</button>
      </div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/' element={<MainContainer />} /> */}
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
