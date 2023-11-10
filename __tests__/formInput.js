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
import FormInput from '../client/components/FormInput';

describe('Unit tests for button component', () => {
  test('Input has correct placeholder', () => {
    render(<FormInput placeholder={'test'} data-testid='input' />);
    const input = screen.getByTestId('input');
    console.log(prettyDOM(input));
    expect(input.placeholder).toBe('test');
  });

});
