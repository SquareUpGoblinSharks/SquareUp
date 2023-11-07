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
      state.user = Object.assign(state.user, action.payload);
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addMatch: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, getUsers, addMatch } = userSlice.actions;

export default userSlice.reducer;
