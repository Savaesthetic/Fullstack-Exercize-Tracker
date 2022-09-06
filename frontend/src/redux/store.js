import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user';
import workoutReducer from './slices/workout'

export default configureStore({
    reducer: {
        user: userReducer,
        workout: workoutReducer,
    }
})