// goal directory will represent auth part of the global state
// goalService.js: reducers and initial state of authentication will be placed here
// this will handle create, read, update, delete for goal objects
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// initialize state of authentication
const initialState = {
    goals: null,
    isError: false,
    isSuccess: false,
    isLoding: false,
    message: ''
}

// create redux slice, a collection of reducer logic and actions for a feature in the app.
export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        // this will be set back to initiale state unlike users, because the user object needs to persist
        reset: (state) => initialState
    }
})

// export reset reducer function to be used on any components
export const { reset } = goalSlice.actions
// exports all reducers in goalSlice.js
export default goalSlice.reducer