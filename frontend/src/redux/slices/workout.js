import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const workoutAdapter = createEntityAdapter({});

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: workoutAdapter.getInitialState(),
    reducers: {
        // TODO
    }
})

export default workoutSlice.reducer;