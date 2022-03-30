import { configureStore } from '@reduxjs/toolkit';
// import the reducer from authSlice.js
import authReducer from '../features/auth/authSlice';
// import the reducer from goalSlice.js
import goalReducer from '../features/goals/goalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
