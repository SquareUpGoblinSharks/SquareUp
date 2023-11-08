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
import Button from '../client/components/Button';

describe('Unit tests for button component', () => {
  test('Button has correct value', () => {
    render(<Button value={'test'} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('test');
  });

  test('Button invokes function on click', () => {
    const testFunc = jest.fn();
    render(<Button onClickFunc={testFunc} />);
    fireEvent.click(screen.getByRole('button'));
    console.log(prettyDOM(screen.getByRole('button')));
    expect(testFunc).toHaveBeenCalledTimes(1);
  });

  test('Button has correct color when primary', () => {
    render(<Button primary={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });

  test('Button has correct color when secondary', () => {
    // render new button with primary set to false
    render(<Button value={'test2'} primary={false} />);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-300');
  });
});
