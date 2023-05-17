import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../../store/appSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.appSlice.username);

  function loginFunction(e, password) {
    e.preventDefault();

    //TODO: change endpoint here based on what they use on the backend
    fetch('/tbd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      // then if data.statusCode === 200 we navigate
      // else we create an error message
      .catch((err) => {
        console.log(err);
        console.log('Failed to log user in');
      });

    navigate('/');
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => loginFunction(e, document.querySelector('#password').value)}>
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          placeholder='your username'
          onChange={(e) => dispatch(setUsername(e.target.value))}
          required></input>

        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          placeholder='your password'
          required></input>

        <button type='submit'>
          Login
        </button>
      </form>
    </>
  );
}
