import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import App from '../App';

beforeEach(() => {
  axios.defaults.baseURL = 'http://localhost:3000';
});

test('Should render description onto page ', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const stars = await component.findByTestId('starRating');
  // expect(stars).toBeInTheDocument();
});
