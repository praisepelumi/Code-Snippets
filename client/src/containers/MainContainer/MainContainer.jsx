import React from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import styles from './MainContainer.module.scss';
import { useDispatch } from 'react-redux';
import { setOpenModal, setUsername } from '../../../store/appSlice.js';
import img from '../../assets/star nose mole.jpeg';

const MainContainer = () => {
  const dispatch = useDispatch();
  function logoutFunction() {
    dispatch(setUsername(null));
    document.cookie = 'ssid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  return (
    <div className={styles.container}>
      <Sidebar />      
      <div>
        <h2 className={styles.imgHeader}>Click me to add a new snippet!</h2>
        <button
          className={styles.addButton}
          onClick={() => {
            dispatch(setOpenModal(true));
          }}>
          <img src={img} alt='img' className={styles.img} />
        </button>
        <button className={styles.logoutButton} onClick={logoutFunction}>
        Logout
      </button>
      </div>
    </div>
  );
};

export default MainContainer;
