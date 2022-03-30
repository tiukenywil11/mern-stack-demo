// goal directory will represent auth part of the global state
// goalService.js: reducers and initial state of authentication will be placed here
// this will handle create, read, update, delete for goal objects
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import from goalService.js
import goalService from './goalService';

// initialize state of authentication
const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create an async thunk function to create goal
export const createGoal  = createAsyncThunk('goals/create', 
    async (goalData, thunkAPI) => {
        try {
            // use thunkAPI to get the state of auth and the valid authentication token
            // this is added because create goal is a protected API, and requires an authentication token
            const token = thunkAPI.getState().auth.user.token
            // return a function from authService
            return await goalService.createGoal(goalData, token)
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

// create an async thunk function to get all goals
export const getGoals  = createAsyncThunk('goals/getAll', 
    // nothing to pass but the thunkAPI, so pass an underscore for the first argument
    async (_, thunkAPI) => {
        try {
            // use thunkAPI to get the state of auth and the valid authentication token
            // this is added because create goal is a protected API, and requires an authentication token
            const token = thunkAPI.getState().auth.user.token
            // return a function from authService
            return await goalService.getGoals(token)
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

// create an async thunk function to delete user goal
export const deleteGoal  = createAsyncThunk('goals/delete',
    // pass the parameter id only, because that's the only one needed to delete
    async (id, thunkAPI) => {
        try {
            // use thunkAPI to get the state of auth and the valid authentication token
            // this is added because delete goal is a protected API, and requires an authentication token
            const token = thunkAPI.getState().auth.user.token
            // return a function from authService
            return await goalService.deleteGoal(id, token)
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

// create redux slice, a collection of reducer logic and actions for a feature in the app.
export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        // this will be set back to initiale state unlike users, because the user object needs to persist
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            // if createGoal is pending, change is loading state to true
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            // if createGoal is fulfilled, get parameters state and action
            // change flags and return the user payload to the createGoal function inside 'try'
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            // if createGoal is rejected, get parameters state and action
            // change flags and return the message payload to the createGoal function inside 'catch'
            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // if getGoals is pending, change is loading state to true
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            // if getGoals is fulfilled, get parameters state and action
            // change flags and set the user payload to the goals inside 'try'            
            .addCase(getGoals.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            // if getGoals is rejected, get parameters state and action
            // change flags and return the message payload to the getGoals function inside 'catch'
            .addCase(getGoals.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // if deleteGoal is pending, change is loading state to true
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            // if deleteGoal is fulfilled, get parameters state and action
            // change flags and use higher order function filter to the existing array to return a new array with deleted entry           
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = state.goals.filter(
                    (goal) => goal._id !== action.payload.id
                )
            })
            // if deleteGoal is rejected, get parameters state and action
            // change flags and return the message payload to the deleteGoal function inside 'catch'
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

// export reset reducer function to be used on any components
export const { reset } = goalSlice.actions
// exports all reducers in goalSlice.js
export default goalSlice.reducer