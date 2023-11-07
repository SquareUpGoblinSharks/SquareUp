import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './state/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: true,
});

export default store;
