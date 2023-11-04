import { configureStore } from '@reduxjs/toolkit';
import userSlice from './state/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;