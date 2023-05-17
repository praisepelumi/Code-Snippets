import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../scss/WelcomePage.module.scss';

export default function WelcomePage() {
  const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [starMousePosition, setStarMousePosition] = useState({ left: 0, top: 0 });
  const navigate = useNavigate();

  function handleMouseMove(e) {
    setMousePosition({ left: -e.pageX / 8, top: -e.pageY / 8 });
  }
  function handleStarMove(e) {
    setStarMousePosition({ left: e.pageX, top: e.pageY });
  }

  function handleSignUpClick(e) {
    e.preventDefault();
    navigate('/signup');
  }

  function handleLoginClick(e) {
    e.preventDefault();
    navigate('/login');
  }

  document.body.style.cursor = 'none';

  const griddy = [];
  for (let i = 0; i < 3400; i++) {
    griddy.push(<i className='fa-solid fa-star' id={styles.grid}></i>);
  }

  return (
    <div
      className={styles.welcomeDiv}
      onMouseMove={(e) => {
        handleMouseMove(e);
        handleStarMove(e);
      }}>
      <div
        className={styles.backgroundImg}
        style={{ backgroundPositionX: MousePosition.left, backgroundPositionY: MousePosition.top }}>
        {griddy}
        <section id={styles.welcomePageMain}>
          <h1>WELCOME</h1>
          <button className={styles.signUpButton} onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className={styles.logInButton} onClick={handleLoginClick}>
            Log In
          </button>
          <h3>CODE SNIPPETS</h3>
        </section>
      </div>
      {/* <img
        style={{ left: MousePosition.left, top: MousePosition.top }}
        className={styles.backgroundImg}
        id='backgroundImg'
        src='https://image.ibb.co/czVo18/stars.png'
        alt='Starry night sky'
      /> */}
    </div>
  );
}
