import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import { Provider, useDispatch } from 'react-redux';
import '@testing-library/jest-dom';
import { addMatch } from '../client/state/userSlice';

import store from '../client/store';
import UpcomingMatches from '../client/components/UpcomingMatches';

describe('Unit Testing Upcoming Matches', () => {
  let text;
  let testUser = {
    _id: '654d684da49332376cabe2a4',
    name: 'A#1 Cool Guy',
    username: 'coolestguy89',
    password: '$2a$10$N..IuiaA9lY20qcFshb22Oqz1KqhzAnvryOOXuDBYHQ6Fmz5FTTCu',
    profilePicture: 'none',
    wins: [],
    loss: [],
    totalWins: 0,
    totalLosses: 0,
    __v: 0,
    age: 33,
    fightingStyle: 'orange',
    height: 5,
    sex: 'male',
    weight: 5,
    location: 'Encinitas, CA'
  };

  beforeEach(() => {
    
    text = render(
      <Provider store={store} >
        <UpcomingMatches />
      </Provider>

    );
  });
  test('Has a header named upcoming matches', () => {
    expect(text.getByRole('heading')).toHaveTextContent('UPCOMING MATCHES');
  });
  test('Has a header-wrapper components', () => {
    expect(text.getByText('Name')).toBeInTheDocument()
    expect(text.getByText('W/L')).toBeInTheDocument()
  });
  // test('addMatch increases the number of matches displayed', () => {
  //   const dispatch = useDispatch();
  //   dispatch(addMatch(testUser));
  //   expect(text.getAllByText('A#1 Cool Guy').length).toBe(1)
  // })

});
