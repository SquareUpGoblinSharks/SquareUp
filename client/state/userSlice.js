import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../lib/client.js';


export const loginUser = createAsyncThunk(
  'user/loginAsync',
  async(data, thunkAPI) => {
    try{
      const response = await client.post('/login', data, {});
      if(response.status = 200) {
        return response.data
      } else {
        return thunkAPI.rejectWithValue(`user/login: bad status: ${response.status}`);
      }
    } catch(err) {
      if (err.response && err.response.data.message) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
})

export const getAllUsers = createAsyncThunk(
  'user/getAllUsersAsync',
  async(data, thunkAPI) => {
    try{
      const response = await client.get('/Leaderboard');
      if(response.status = 200) {
        return response.data
      } else {
        return thunkAPI.rejectWithValue(`user/getAllUsers: bad status: ${response.status}`);
      }
    } catch(err) {
      if (err.response && err.response.data.message) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
})

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
  userStatus: 'idle', // pending, success, failure
  users: [],
  allUsersStatus: 'idle',
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.userStatus = 'pending';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userStatus = 'success';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userStatus = 'failure';
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.allUsersStatus = 'pending';
      })
      .addCase(getAllUsers.fulfilled, (state,action) => {
         state.users = action.payload; 
         state.userStatus = 'success';
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.allUsersStatus = 'failure'
        state.error = action.error.message;
      })
  }


});

export const { login, getUsers, addMatch } = userSlice.actions;

export default userSlice.reducer;
