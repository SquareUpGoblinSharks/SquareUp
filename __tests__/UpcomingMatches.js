import React from 'React';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import '@testing-library/jest-dom'

import UpcomingMatches from '../client/components/UpcomingMatches';

describe('Unit Testing Upcoming Matches', () => {
  let text;
  beforeAll(()=>{
    text = render(<UpcomingMatches />);
  });
  test('Has a header named upcoming matches', ()=> {
    expect(text.getByRole('heading')).toHaveTextContent('UPCOMING MATCHES');
  })
})