import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import App from '../App';

beforeEach(() => {
  axios.defaults.baseURL = 'http://localhost:3000';
});

test('Should render right arrow', async () => {
  // let component;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // const rightArrow = await component.findByTestId('arrow-right');
  // expect(rightArrow).toBeInTheDocument();
});

test('left arrow renders after click on right arrow', async () => {
  // let component;
  // let icon;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // await act(async () => {
  //   icon = await component.findByTestId('arrow-right');
  //   await fireEvent.click(icon);
  // });

  // const leftArrow = await component.findByTestId('arrow-left');
  // expect(leftArrow).toBeInTheDocument();
});

test('left arrow renders after click on right arrow and disappears after clicking on itself', async () => {
  // let component;
  // let icon;

  // await act(async () => {
  //   component = render(<App />);
  //   expect(component.getByText('Loading...')).toBeInTheDocument();
  // });

  // await act(async () => {
  //   icon = await component.findByTestId('arrow-right');
  //   await fireEvent.click(icon);
  // });

  // const leftArrow = await component.findByTestId('arrow-left');
  // expect(leftArrow).toBeInTheDocument();

  // await act(async () => {
  //   await fireEvent.click(leftArrow);
  // });

  // expect(leftArrow).not.toBeInTheDocument();
});
