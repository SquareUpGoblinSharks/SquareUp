import { configureStore } from '@reduxjs/toolkit';
import userSlice from './state/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
  devTools: true,
});

export default store;
