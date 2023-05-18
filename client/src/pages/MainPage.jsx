import React, { useState } from 'react';
import MainContainer from '../containers/MainContainer/MainContainer';
import {useSelector} from 'react-redux';
import WelcomePage from './WelcomePage';

export default function MainPage() {
  const username = useSelector(state => state.appSlice.username)
  // return <MainContainer />;
  return username ? <MainContainer /> : <WelcomePage />;
}
