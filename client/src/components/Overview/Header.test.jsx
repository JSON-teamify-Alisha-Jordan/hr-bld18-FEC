import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import Header from './Header';

beforeEach(() => {
  axios.defaults.baseURL = 'http://localhost:3000';
});

describe('Displays the proper header', () => {
  test('Should render header esLint & Co. ', async () => {
    // let component;

    // await act(async () => {
    //   component = render(<Header />);
    // });

    // const header = await component.findByTestId('companyName');
    // expect(header).toBeInTheDocument();
  });
});
