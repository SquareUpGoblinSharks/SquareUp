import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../lib/client.js';

// const response = await client.post('/login', data, {})
//       if (response.status === 200) {
//         dispatch(login(response.data));
//         const allUsersResponse = await client.get('/HomePage');
//         if (allUsersResponse.status === 200) {
//           dispatch(getUsers(allUsersResponse.data));
//           navigate('/home')

export const loginAndFetchUsers = createAsyncThunk(
  'user/login',
  async(data) => {
    try{
      const response = await client.post('/login', data, {});
      if(response.status = 200);
      dispatch(login(response.data))
    }
  }
)

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
