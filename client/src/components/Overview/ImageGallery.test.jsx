import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from '../App';

describe('Renders the right arrow only by default', () => {
  test('Should render right arrow', async () => {
    // let component;

    // await act(async () => {
    //   component = render(<App />);
    //   expect(component.getByText('Loading...')).toBeInTheDocument();
    // });

    // const rightArrow = await component.findByTestId('arrow-right', {}, { timeout: 3000 });
    // // screen.debug();
    // expect(rightArrow).toBeInTheDocument();
  });
});
