import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../client/src/App.jsx';

describe('App', () => {
  test('App renders', () => {
    render(<App />);
    screen.debug();
  });
});
