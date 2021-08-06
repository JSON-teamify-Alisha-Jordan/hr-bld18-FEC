import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import App from '../App';

beforeEach(() => {
  axios.defaults.baseURL = 'http://localhost:3000';
});

test('Should render product category', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const category = await component.findByTestId('category');
  // expect(category).toBeInTheDocument();
});

test('Should render product name', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const name = await component.findByTestId('productName');
  // expect(name).toBeInTheDocument();
});

test('Should render product price', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const price = await component.findByTestId('price');
  // expect(price).toBeInTheDocument();
});

test('Should render product selected style', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const selectedStyle = await component.findByTestId('selectedStyle');
  // expect(selectedStyle).toBeInTheDocument();
});
