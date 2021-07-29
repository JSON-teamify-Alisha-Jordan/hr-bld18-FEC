import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../client/src/components/App.jsx';

describe('App', () => {
  test('App renders', async () => {
    // render(<App />);
    expect(await screen.findByText(/Load/)).toBeInTheDocument();
    // screen.debug();
  });
});
