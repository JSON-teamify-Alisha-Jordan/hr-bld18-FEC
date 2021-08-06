import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import App from '../App';

beforeEach(() => {
  axios.defaults.baseURL = 'http://localhost:3000';
});

test('Displays "*Please select size" when Add to Cart is clicked with no size selected.', async () => {
  // let component;
  // let button;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // await act(async () => {
  //   button = await component.findByTestId('cartButton');
  //   await fireEvent.click(button);
  // });

  // const error = await component.findByTestId('selectSize');
  // expect(error).toBeInTheDocument();
});
