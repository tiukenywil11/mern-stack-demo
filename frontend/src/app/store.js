import { configureStore } from '@reduxjs/toolkit';
// import the reducer from authSlice.js
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
