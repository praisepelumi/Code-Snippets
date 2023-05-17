import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Login from '../client/src/pages/LoginPage';
import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';

describe('Unit testing React components', () => {
  let login;
  
  beforeEach(() => {
    login = render(<Login />);
  });

  test('Renders', () => {
    expect(login.getByRole('button', { name: 'Login' })).toBeTruthy();
  });

  test('Button works', () => {
    userEvent.type(login.getByPlaceholderText('your username'), 'myUsername');
    userEvent.type(login.getByPlaceholderText('your password'), 'myPassword');
    waitFor(() => userEvent.click(login.getByRole('button', { name: 'Login' })), { timeout: 1000 });
    expect(screen.getByText('Code Snippets')).toBeInTheDocument();
  });
});
