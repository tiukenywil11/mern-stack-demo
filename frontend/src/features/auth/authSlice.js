// auth directory will represent auth part of the global state
// authSlice.js: reducers and initial state of authentication will be placed here
// this will handle register, login, an logout states
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import from authService.js
import authService from './authService';
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

// create an async thunk function to register user
// thunk function delays the evaluation of a value
// takes two arguements, first is string with the action, and the second is an async function
export const register = createAsyncThunk('auth/register', 
    async (user, thunkAPI) => {
        try {
            // return a function from authService
            return await authService.register(user)
        } catch (error) {
            
            // returns a message upon error, checks all location if message exists, or if only exist in error.message, or on error
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) ||
            error.message || 
            error.toString()
                return thunkAPI.rejectWithValue(message);
    
        }
    }
)

// create an async thunk function to login user
export const login = createAsyncThunk('auth/login', 
    async (user, thunkAPI) => {
        try {
            // return a function from authService
            return await authService.login(user)
        } catch (error) {
            
            // returns a message upon error, checks all location if message exists, or if only exist in error.message, or on error
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) ||
            error.message || 
            error.toString()
                return thunkAPI.rejectWithValue(message);
    
        }
    }
)

// create an async thunk function to logout user
export const logout = createAsyncThunk('auth/logout', 
    async () => {
        await authService.logout();
    }
)

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
    // for the extra reducers, add special reducers to track custom cases
    // pending, fulfilled, rejected are returned by createAsyncThunk
    extraReducers: (builder) => {
        builder
            // if register is pending, change is loading state to true
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            // if register is fulfilled, get parameters state and action
            // change flags and return the user payload to the register function inside 'try'
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            // if register is fulfilled, get parameters state and action
            // change flags and return the message payload to the register function inside 'catch'
            // change the user state to null
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            // if logout is fulfilled remove user 
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

// export reset reducer function to be used on any components
export const { reset } = authSlice.actions
// exports all reducers in authSlice.js
export default authSlice.reducer