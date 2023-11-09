import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  prettyDOM,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import User from '../client/components/User';

describe('Unit tests for User component', () => {
  test('Button has correct value', () => {
    // render(<Button value={'test'} />);
    // const button = screen.getByRole('button');
    // expect(button).toHaveTextContent('test');
  });

  test('Button has correct color when primary', () => {

  });

  test('Button has correct color when secondary', () => {

  });
});
