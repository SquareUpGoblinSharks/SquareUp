import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    username: null,
    password: null,
    profilePicture: null,
    sex: null,
    height: null,
    weight: null,
    fightingStyle: null,
    totalWins: null,
    totalLosses: null,
  },
  users: [],
  upcomingMatches: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload[0];
    },
    getUsers: (state, action) => {
      state.users = action.payload[0];
    },
    addMatch: (state, action) => {
      state.users.push(action.payload);
    },

  },
});

export const { login, getUsers, addMatch} = userSlice.actions;

export default userSlice.reducer;
