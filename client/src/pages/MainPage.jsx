import React, { useState } from 'react';
import MainContainer from '../containers/MainContainer/MainContainer';

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? <MainContainer /> : <WelcomePage />;
}
