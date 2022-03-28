// auth directory will represent auth part of the global state
// authSlice.js: reducers and initial state of authentication will be placed here
// this will handle register, login, an logout states
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// initialize state of authentication
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoding: false,
    message: ''
}

// create redux slice, a collection of reducer logic and actions for a feature in the app.
// redux reducer is a function that takes the previous state, and return a new state
// export the redux splice with return values having name, initialState, a reset reducer
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})

// export reset reducer function to be used on any components
export const { reset } = authSlice.actions
// exports all reducers in authSlice.js
export default authSlice.reducer