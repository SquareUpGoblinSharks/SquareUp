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
import { debug } from 'webpack';

describe('Unit tests for User component', () => {
  test('User has correct value', () => {
    render(<User name={'test'} />);
    const li = screen.getByRole('listitem')
    // console.log(prettyDOM(li));
    expect(li.firstChild).toHaveTextContent('test');
  });

  test('User has correct win/loss value', () => {
    render(<User totalWins={4} totalLosses={1}/>);
    const li = screen.getByRole('listitem')
    // console.log(prettyDOM(li));
    expect(li.lastChild).toHaveTextContent('4 W - 1 L');
  });

  test('User displays image when champ', () => {
    render(<User champ={true}/>);
    const li = screen.getByRole('listitem')
    // console.log(prettyDOM(li.firstChild));
    expect(li.firstChild.firstChild.src).toBe('https://static.vecteezy.com/system/resources/previews/020/033/055/original/golden-crown-for-king-and-queen-and-success-on-transparent-background-free-png.png')
  });
});
