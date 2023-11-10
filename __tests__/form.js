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
import Form from '../client/components/Form';

describe('Unit tests for Form component', () => {
  
  // test('Form function is invoked on submit', () => {
  //   const testFunc = jest.fn();
  //   render(<Form  />);
  //   const form = screen.getByRole('button');
  //   expect(button).toHaveTextContent('test');
  // });

  // test('Form renders input components', () => {

  // });

  test('Form displays child components', () => {
    const form = render(<Form><button></button></Form>)
    expect(form.getByRole('button')).toBeTruthy();

  });
});
