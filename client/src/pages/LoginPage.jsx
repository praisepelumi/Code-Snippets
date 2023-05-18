import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../../store/appSlice';
import { setLoading, setSnippets } from '../../store/appSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.appSlice.username);

   // getSnippet func
   const getSnippet = (username) => {
    dispatch(setLoading(true));

    console.log(newSnippetArray)
    fetch(`/snippets/${username}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);

        // moved setSnippets to outside of for loop so we arent re-rendering each time a snippet is added to state
        const newSnippetArray = [];
        
        for (const snippet of res) {
          newSnippetArray.push(snippet);
          console.log(snippet)
        }


        dispatch(setSnippets(newSnippetArray));
        dispatch(setLoading(false));
      })
      .catch((error) => console.log('Get request failed', error));
  };


  function loginFunction(e, password) {
    e.preventDefault();
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => {

        if(data.status === 200){
          getSnippet(username);
           navigate('/')}
        else console.log('bad password/username')
      })

      .catch((err) => {
        console.log(err);
        console.log('Failed to log user in');
      });

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
        <input id='password' type='password' placeholder='your password' required></input>

        <button type='submit'>Login</button>
      </form>
    </>
  );
}
